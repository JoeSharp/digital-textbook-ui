import * as React from "react";
import { storiesOf } from "@storybook/react";
import EditCourse from "./EditCourse";
import { TEST_COURSES } from "../../../lib/api/useCourseApi/testData";

const TestHarness: React.FunctionComponent = () => {
  return <EditCourse courseId={TEST_COURSES[0]._id} />;
};

storiesOf("Courses/Edit Course", module).add("Basic", () => <TestHarness />);
