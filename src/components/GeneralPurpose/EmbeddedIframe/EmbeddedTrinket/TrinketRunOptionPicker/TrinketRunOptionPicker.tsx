import React from "react";
import Select from "react-select";

import { ControlledInput } from "../../../../../lib/useForm/types";
import { ITrinketRunOption } from "../../../../../api/useEmbeddedIframeApi/types";
import { BasicOption } from "../../../../../lib/useReactSelect/types";
import useReactSelect from "../../../../../lib/useReactSelect";

const options: BasicOption[] = [
  {
    label: "Allow either Run or Interactive console",
    value: ITrinketRunOption.either,
  },
  {
    label: "Run code only",
    value: ITrinketRunOption.run,
  },
  {
    label: "Interactive console only",
    value: ITrinketRunOption.console,
  },
];

const TrinketRunOptionPicker: React.FunctionComponent<ControlledInput<
  ITrinketRunOption
>> = ({ value, onChange }) => {
  const { _onChange, _options, _value } = useReactSelect<ITrinketRunOption>({
    value,
    onChange,
    options,
  });

  return <Select onChange={_onChange} value={_value} options={_options} />;
};

export default TrinketRunOptionPicker;
