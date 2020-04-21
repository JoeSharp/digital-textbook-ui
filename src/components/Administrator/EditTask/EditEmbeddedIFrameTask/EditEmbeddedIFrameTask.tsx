import React from "react";
import { IMongoDocument, ITask_EmbeddedIFrame } from "../../../../types";

interface Props {
  task: IMongoDocument & ITask_EmbeddedIFrame;
}

const EditEmbeddedIFrameTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <div>Embedded IFrame Task Editor: {JSON.stringify(task, null, 2)}</div>
  );
};

export default EditEmbeddedIFrameTask;
