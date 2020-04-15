import React from "react";
import { storiesOf } from "@storybook/react";
import CourseSelection from "./CourseSelection";

const TestHarness: React.FunctionComponent = () => {
  return <CourseSelection />;
};

storiesOf("Student/Course Selection", module).add("Basic", () => (
  <TestHarness />
));
