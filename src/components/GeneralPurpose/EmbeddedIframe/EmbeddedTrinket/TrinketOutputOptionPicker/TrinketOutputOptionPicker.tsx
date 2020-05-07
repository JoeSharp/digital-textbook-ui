import React from "react";
import Select, { ValueType } from "react-select";

import { ControlledInput } from "../../../../../lib/useForm/types";
import { ITrinketOutputOption } from "../../../../../api/useEmbeddedIframeApi/types";
import { BasicOption } from "../../../../../lib/useReactSelect/types";

const _options: BasicOption[] = [
  {
    label:
      "Show the code and output side by side (smaller screens will only show one at a time)",
    value: ITrinketOutputOption.codeAndOutputSideBySide,
  },
  {
    label: "Only show the output (hide the code)",
    value: ITrinketOutputOption.hideTheCode,
  },
  {
    label: "Only show code or output (let users toggle between them)",
    value: ITrinketOutputOption.codeOrOutputToggle,
  },
];

const TrinketOutputOptionPicker: React.FunctionComponent<ControlledInput<
  ITrinketOutputOption
>> = ({ value, onChange }) => {
  const _value: BasicOption = React.useMemo(
    () => _options.find((o) => o.value === value) || _options[0],
    [value]
  );
  const _onChange: (v: ValueType<BasicOption>) => void = React.useCallback(
    (v) => {
      if (!!v && (v as BasicOption).value) {
        onChange(((v as BasicOption).value as unknown) as ITrinketOutputOption);
      }
    },
    [onChange]
  );

  return <Select onChange={_onChange} value={_value} options={_options} />;
};

export default TrinketOutputOptionPicker;
