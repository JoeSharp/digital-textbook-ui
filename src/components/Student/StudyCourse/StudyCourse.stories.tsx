import React from "react";
import { storiesOf } from "@storybook/react";
import StudyCourse from "./StudyCourse";
import { useCourseApi } from "../../../api/useCourseApi";
import { ICourseDoc } from "../../../types";

const TestHarness: React.FunctionComponent = () => {
  const { courses } = useCourseApi();
  const course: ICourseDoc = React.useMemo(() => courses[0], [courses]);

  return <div>{course && <StudyCourse courseId={course._id} />}</div>;
};

storiesOf("Student/Study Course", module).add("Basic", () => <TestHarness />);
