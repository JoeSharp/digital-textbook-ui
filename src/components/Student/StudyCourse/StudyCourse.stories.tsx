import React from "react";
import { storiesOf } from "@storybook/react";
import StudyCourse from "./StudyCourse";
import { useCoursesApi } from "../../../api";
import { ICourseDoc } from "../../../types";

const TestHarness: React.FunctionComponent = () => {
  const { courses } = useCoursesApi();
  const course: ICourseDoc = React.useMemo(() => courses[0], [courses]);

  return <div>{course && <StudyCourse courseId={course._id} />}</div>;
};

storiesOf("Student/Study Course", module).add("Basic", () => <TestHarness />);
