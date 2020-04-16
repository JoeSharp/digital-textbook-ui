import React from "react";
import { storiesOf } from "@storybook/react";
import LessonTable from "./LessonTable";
import { courses } from "../../../../testing/data";

const courseId = courses[0]._id;

const TestHarness: React.FunctionComponent = () => {
  return <LessonTable courseId={courseId} />;
};

storiesOf("Administrator/Edit Course/Lesson Table", module).add("Basic", () => (
  <TestHarness />
));
