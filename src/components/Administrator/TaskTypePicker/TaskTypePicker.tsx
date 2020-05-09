import React from "react";
import Select from "react-select";

import { ControlledInput } from "../../../lib/useForm/types";
import { ITaskType } from "../../../api/useTaskApi/types";
import useReactSelect from "../../../lib/useReactSelect";
import { BasicOption } from "../../../lib/useReactSelect/types";

const OPTIONS: BasicOption[] = [
  {
    label: "Embedded Iframe",
    value: ITaskType.EmbeddedIframe.toString(),
  },
  {
    label: "Free-Flow Text",
    value: ITaskType.FreeFlowText.toString(),
  },
];

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
