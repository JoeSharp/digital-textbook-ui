import React from "react";
import useSingleTaskApi from "../../../api/useTaskApi/useSingleTaskApi";
import {
  ITaskDoc,
  ITaskType,
  ITaskEmbeddedIframe,
} from "../../../api/useTaskApi/types";
import EditEmbeddedIframeTask from "./EditEmbeddedIframeTask";

interface Props {
  taskId: string;
}

const EditSpecificTask: React.FunctionComponent<{
  task?: ITaskDoc;
}> = ({ task }) => {
  if (!task) return null;

  if (task.type === ITaskType.EmbeddedIframe) {
    return <EditEmbeddedIframeTask task={task as ITaskEmbeddedIframe} />;
  }

  return null;
};

const EditTask: React.FunctionComponent<Props> = ({ taskId }) => {
  const { task } = useSingleTaskApi(taskId);

  return (
    <div>
      Edit Task {taskId}
      <div>{JSON.stringify(task, null, 2)}</div>
      <EditSpecificTask task={task} />
    </div>
  );
};

export default EditTask;
