import React from "react";
import { storiesOf } from "@storybook/react";
import TaskTable from "./TaskTable";
import { lessons } from "../../../../testing/data";

const TestHarness: React.FunctionComponent = () => {
  return <TaskTable lessonId={lessons[0]._id} />;
};

storiesOf("Administrator/Edit Lesson/Task Table", module).add("Basic", () => (
  <TestHarness />
));
