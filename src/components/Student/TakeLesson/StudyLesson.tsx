import React from "react";

interface Props {
  lessonId: string;
}

const StudyLesson: React.FunctionComponent<Props> = ({ lessonId }) => {
  return (
    <div>
      <h1>{lessonId}</h1>
    </div>
  );
};

export default StudyLesson;
