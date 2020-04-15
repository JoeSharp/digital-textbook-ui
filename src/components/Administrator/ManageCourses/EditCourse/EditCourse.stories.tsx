import React from "react";
import { storiesOf } from "@storybook/react";
import EditCourse from "./EditCourse";
import { courses } from "../../../../testing/data";

const TestHarness: React.FunctionComponent = () => {
  return <EditCourse courseId={courses[0]._id} />;
};

storiesOf("Administrator/ManageCourses/Edit Course", module).add(
  "Basic",
  () => <TestHarness />
);
