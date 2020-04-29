import React from "react";
import { storiesOf } from "@storybook/react";
import ScaffoldedQuestions from "./ScaffoldedQuestions";
import scaffoldedQuestions from "../../../../testing/data/primm/scaffoldedQuestions";

const TestHarness: React.FunctionComponent = () => {
  return <ScaffoldedQuestions scaffoldedQuestions={scaffoldedQuestions} />;
};

storiesOf("Student/Questions/Scaffolded Questions", module).add("basic", () => (
  <TestHarness />
));
