import React from "react";

interface Props {
  courseId: string;
}

const StudyCourse: React.FunctionComponent<Props> = ({ courseId }) => {
  return <div>Course: {courseId}</div>;
};

export default StudyCourse;
