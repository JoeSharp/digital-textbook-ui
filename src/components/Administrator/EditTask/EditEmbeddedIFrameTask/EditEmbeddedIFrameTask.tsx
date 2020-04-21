import React from "react";
import { IMongoDocument, ITaskEmbeddedIframe } from "../../../../types";

interface Props {
  task: IMongoDocument & ITaskEmbeddedIframe;
}

const EditEmbeddedIframeTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <div>Embedded Iframe Task Editor: {JSON.stringify(task, null, 2)}</div>
  );
};

export default EditEmbeddedIframeTask;
