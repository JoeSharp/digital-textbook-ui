import React from "react";
import { storiesOf } from "@storybook/react";

import EditEmbeddedIframeTask from "./EditEmbeddedIframeTask";
import { tasks } from "../../../../testing/data";
import {
  ITaskType,
  ITaskEmbeddedIframe,
} from "../../../../api/useTaskApi/types";

const urlTask: ITaskEmbeddedIframe = tasks.find(
  (t) => t.type === ITaskType.EmbeddedIframe
) as ITaskEmbeddedIframe;

const TestHarness: React.FunctionComponent = () => {
  return (
    (urlTask && <EditEmbeddedIframeTask task={urlTask} />) || (
      <div>No Embedded Iframe Tasks Found in Test Data</div>
    )
  );
};

storiesOf("Administrator/Edit Task/Embedded Iframe Task", module).add(
  "basic",
  () => <TestHarness />
);
