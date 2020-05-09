import React from "react";
import Select from "react-select";

import { ControlledInput } from "../../../../../lib/useForm/types";
import { ITrinketOutputOption } from "../../../../../api/useEmbeddedIframeApi/types";
import { BasicOption } from "../../../../../lib/useReactSelect/types";
import useReactSelect from "../../../../../lib/useReactSelect";

const options: BasicOption[] = [
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
  const { _onChange, _options, _value } = useReactSelect<ITrinketOutputOption>({
    value,
    onChange,
    options,
  });

  return <Select onChange={_onChange} value={_value} options={_options} />;
};

export default TrinketOutputOptionPicker;
