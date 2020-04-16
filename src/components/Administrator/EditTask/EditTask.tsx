import React from "react";

interface Props {
  taskId: string;
}

const EditTask: React.FunctionComponent<Props> = ({ taskId }) => {
  return <div>Edit Task {taskId}</div>;
};

export default EditTask;
