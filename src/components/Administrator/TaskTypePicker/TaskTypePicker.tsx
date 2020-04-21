import React from "react";
import Select from "react-select";

import { ControlledInput } from "../../../lib/useForm/types";
import { ITaskType } from "../../../types";
import useReactSelect from "../../../lib/useReactSelect";

const OPTIONS = Object.keys(ITaskType);

const TaskTypePicker: React.FunctionComponent<ControlledInput<ITaskType>> = ({
  value,
  onChange,
}) => {
  const { _onChange, _options, _value } = useReactSelect<ITaskType>({
    value,
    onChange,
    options: OPTIONS,
  });

  return <Select onChange={_onChange} value={_value} options={_options} />;
};

export default TaskTypePicker;
