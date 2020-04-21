import React from "react";
import { storiesOf } from "@storybook/react";

import EditEmbeddedIFrameTask from "./EditEmbeddedIFrameTask";
import { tasks } from "../../../../testing/data";
import {
  ITaskType,
  ITask_EmbeddedIFrame,
  IMongoDocument,
} from "../../../../types";

const urlTask: ITask_EmbeddedIFrame & IMongoDocument = tasks.find(
  (t) => t.type === ITaskType.EmbeddedIFrame
) as ITask_EmbeddedIFrame & IMongoDocument;

const TestHarness: React.FunctionComponent = () => {
  return (
    (urlTask && <EditEmbeddedIFrameTask task={urlTask} />) || (
      <div>No Embedded IFrame Tasks Found in Test Data</div>
    )
  );
};

storiesOf("Administrator/Edit Task/Embedded IFrame Task", module).add(
  "basic",
  () => <TestHarness />
);
