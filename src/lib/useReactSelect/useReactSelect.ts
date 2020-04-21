import React from "react";
import { ValueType } from "react-select";
import { BasicOption } from "./types";

interface PropsIn<T> {
  options: string[];
  value: string | undefined;
  onChange: (v: T) => any;
}

interface UseReactSelect {
  _options: BasicOption[];
  _value: BasicOption | undefined;
  _onChange: (v: ValueType<BasicOption>) => void;
}

const useReactSelect = <T extends {}>({
  options,
  value,
  onChange,
}: PropsIn<T>): UseReactSelect => {
  const _options = React.useMemo(
    () =>
      options.map((o) => ({
        label: o,
        value: o,
      })),
    [options]
  );
  const _value: BasicOption | undefined = React.useMemo(
    () => _options.find((o) => o.value === value),
    [_options, value]
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
    _options,
    _value,
    _onChange,
  };
};

export default useReactSelect;
