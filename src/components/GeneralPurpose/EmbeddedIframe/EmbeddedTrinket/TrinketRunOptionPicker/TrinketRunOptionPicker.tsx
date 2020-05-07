import React from "react";
import Select, { ValueType } from "react-select";

import { ControlledInput } from "../../../../../lib/useForm/types";
import { ITrinketRunOption } from "../../../../../api/useEmbeddedIframeApi/types";
import { BasicOption } from "../../../../../lib/useReactSelect/types";

const _options: BasicOption[] = [
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
  const _value: BasicOption = React.useMemo(
    () => _options.find((o) => o.value === value) || _options[0],
    [value]
  );
  const _onChange: (v: ValueType<BasicOption>) => void = React.useCallback(
    (v) => {
      if (!!v && (v as BasicOption).value) {
        onChange(((v as BasicOption).value as unknown) as ITrinketRunOption);
      }
    },
    [onChange]
  );

  return <Select onChange={_onChange} value={_value} options={_options} />;
};

export default TrinketRunOptionPicker;
