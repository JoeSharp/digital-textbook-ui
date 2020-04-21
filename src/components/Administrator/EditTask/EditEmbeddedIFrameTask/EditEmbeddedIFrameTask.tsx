import React from "react";
import { IMongoDocument, ITaskEmbeddedIFrame } from "../../../../types";

interface Props {
  task: IMongoDocument & ITaskEmbeddedIFrame;
}

const EditEmbeddedIFrameTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <div>Embedded IFrame Task Editor: {JSON.stringify(task, null, 2)}</div>
  );
};

export default EditEmbeddedIFrameTask;
