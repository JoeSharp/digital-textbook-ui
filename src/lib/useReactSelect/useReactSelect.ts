import React from "react";
import { ValueType } from "react-select";
import { BasicOption } from "./types";

interface PropsIn<T> {
  options: BasicOption[];
  value: string | undefined;
  onChange: (v: T) => any;
}

interface UseReactSelect {
  _options: BasicOption[];
  _value: BasicOption | undefined;
  _onChange: (v: ValueType<BasicOption>) => void;
}

/**
 * This hook basically converts a value/onChange/options trio so
 * that the options can be {label, value} but the value can just be the 'value'.
 *
 * @param props {options, value, onChange} The value is the 'value' of the selected option.
 */
const useReactSelect = <T extends {}>({
  options,
  value,
  onChange,
}: PropsIn<T>): UseReactSelect => {
  const _value: BasicOption | undefined = React.useMemo(
    () => options.find((o) => o.value === value),
    [options, value]
  );
  const _onChange: (v: ValueType<BasicOption>) => void = React.useCallback(
    (v) => {
      if (!!v && (v as BasicOption).value) {
        onChange(((v as BasicOption).value as unknown) as T);
      }
    },
    [onChange]
  );

  return {
    _options: options,
    _value,
    _onChange,
  };
};

export default useReactSelect;
