import React from "react";
import TaskTable from "./TaskTable";
import NewTaskDialog, { useDialog } from "./NewTaskDialog";

interface Props {
  lessonId: string;
}

const EditLesson: React.FunctionComponent<Props> = ({ lessonId }) => {
  const { componentProps, showDialog } = useDialog(lessonId);

  return (
    <div>
      ADMIN LESSON {lessonId}
      <h2>Tasks</h2>
      <NewTaskDialog {...componentProps} />
      <button className="btn btn-primary" onClick={showDialog}>
        Add Task
      </button>
      <TaskTable lessonId={lessonId} />
    </div>
  );
};

export default EditLesson;
