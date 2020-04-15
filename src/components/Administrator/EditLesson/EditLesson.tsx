import React from "react";
import TaskTable from "./TaskTable";

interface Props {
  lessonId: string;
}

const EditLesson: React.FunctionComponent<Props> = ({ lessonId }) => {
  return (
    <div>
      ADMIN LESSON {lessonId}
      <h2>Tasks</h2>
      <TaskTable lessonId={lessonId} />
    </div>
  );
};

export default EditLesson;
