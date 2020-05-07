export interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export interface ControlledInput<T> {
  value: T;
  onChange: (v: T) => void;
}

export interface Form<T> {
  value: T;
  useControlledInputProps: <FIELD_TYPE>(
    s: keyof T
  ) => ControlledInput<FIELD_TYPE>;
  useTextInput: (s: keyof T) => InputProps;
  useCheckboxInput: (
    s: keyof T
  ) => {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: any;
  };
}
