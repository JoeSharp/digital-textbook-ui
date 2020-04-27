import React from "react";
import { ITaskEmbeddedIframe } from "../../../../api/useTaskApi/types";

interface Props {
  task: ITaskEmbeddedIframe;
}

const EditEmbeddedIframeTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <div>Embedded Iframe Task Editor: {JSON.stringify(task, null, 2)}</div>
  );
};

export default EditEmbeddedIframeTask;
