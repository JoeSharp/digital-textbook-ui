import React from "react";
import { Form, ControlledInput } from "./types";

/**
 * The form can be given lists of field names for text and checkbox based HTML input elements.
 * It will then generate onChange/value pairs for those fields which can be destructed from
 * the response to useForm.
 */
interface UseForm<T> {
  initialValues?: T;
  onValidate?: (updates: Partial<T>) => void;
  onChange?: (v: T) => void;
}

const reducer = <T extends {}>(state: T, action: Partial<T>) => {
  return { ...state, ...action };
};

export const useForm = <T extends {}>({
  initialValues,
  onValidate,
  onChange,
}: UseForm<T>): Form<T> => {
  const [v, onUpdate] = React.useReducer(reducer, initialValues || {});
  const value = v as T;

  // Propagate the change up
  React.useEffect(() => onChange && onChange(value), [value, onChange]);

  // Call out to the validation function when the values change
  React.useEffect(() => {
    if (!!onValidate) {
      onValidate(value);
    }
  }, [value, onValidate]);

  const useTextInput = (s: keyof T) => ({
    type: "text",
    onChange: React.useCallback(
      ({ target: { value } }) => onUpdate({ [s]: value } as T),
      [s]
    ),
    value: `${value[s]}`,
  });

  const useCheckboxInput = (s: keyof T) => ({
    type: "checkbox",
    checked: value[s],
    onChange: React.useCallback(
      (e) =>
        onUpdate(({
          [s]: e.target.checked,
        } as unknown) as Partial<T>),
      [s]
    ),
  });

  const useControlledInputProps = <FIELD_TYPE>(
    s: keyof T
  ): ControlledInput<FIELD_TYPE> => ({
    value: (value[s] as unknown) as FIELD_TYPE,
    onChange: React.useCallback((v) => onUpdate(({ [s]: v } as unknown) as T), [
      s,
    ]),
  });

  return {
    value,
    useTextInput,
    useCheckboxInput,
    useControlledInputProps,
  };
};

export default useForm;
