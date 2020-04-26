import React from "react";
import { storiesOf } from "@storybook/react";
import QuestionSet from "./QuestionSet";
import questionSets from "../../../../testing/data/primm/questionSets";

const TestHarness: React.FunctionComponent = () => {
  return <QuestionSet questionSets={questionSets} />;
};

storiesOf("Student/Questions/Question Set", module).add("basic", () => (
  <TestHarness />
));
