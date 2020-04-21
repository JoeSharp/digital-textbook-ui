import React from "react";
import { storiesOf } from "@storybook/react";
import useForm from "../../../lib/useForm";
import { ITaskType } from "../../../types";
import JsonDebug from "../../../lib/JsonDebug";
import TaskTypePicker from "./TaskTypePicker";

interface FormValues {
  taskType: ITaskType;
}

const TestHarness: React.FunctionComponent = () => {
  const { useControlledInputProps, value } = useForm<FormValues>({});

  const taskTypeProps = useControlledInputProps<ITaskType>("taskType");

  return (
    <div>
      <TaskTypePicker {...taskTypeProps} />
      <JsonDebug value={value} />
    </div>
  );
};

storiesOf("Administrator/Task Type Picker", module).add("basic", () => (
  <TestHarness />
));
