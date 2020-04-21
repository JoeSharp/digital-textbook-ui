import React from "react";
import { storiesOf } from "@storybook/react";

import EditEmbeddedIFrameTask from "./EditEmbeddedIFrameTask";
import { tasks } from "../../../../testing/data";
import {
  ITaskType,
  ITaskEmbeddedIFrame,
  IMongoDocument,
} from "../../../../types";

const urlTask: ITaskEmbeddedIFrame & IMongoDocument = tasks.find(
  (t) => t.type === ITaskType.EmbeddedIFrame
) as ITaskEmbeddedIFrame & IMongoDocument;

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
