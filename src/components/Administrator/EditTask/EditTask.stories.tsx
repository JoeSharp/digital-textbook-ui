import React from "react";
import { storiesOf } from "@storybook/react";
import EditTask from "./EditTask";

import { tasks } from "../../../testing/data";

const TestHarness: React.FunctionComponent = () => {
  return <EditTask taskId={tasks[0]._id} />;
};

storiesOf("Administrator/Edit Task/basic", module).add("basic", () => (
  <TestHarness />
));
