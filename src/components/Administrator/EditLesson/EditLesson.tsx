import * as React from "react";

interface Props {
  lessonId: string;
}

const EditLesson: React.FunctionComponent<Props> = ({ lessonId }) => {
  return <div>ADMIN LESSON {lessonId}</div>;
};

export default EditLesson;
