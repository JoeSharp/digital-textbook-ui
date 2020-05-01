import React from "react";
import { storiesOf } from "@storybook/react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import {
  IMultipleChoiceQuestion,
  IQuestionType,
} from "../../../../api/useQuestionApi/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IMultipleChoiceQuestion = {
  type: IQuestionType.MultipleChoice,
  id: "lcdMultiChoice",
  question: "What is the best colour for LCD displays?",
  correctOption: "Blue",
  options: ["Red", "Green", "Blue"],
};

const TestHarness: React.FunctionComponent = () => {
  const [value, onChange] = React.useState("");

  return (
    <div>
      <MultipleChoiceQuestion
        question={question}
        studentResponse={{ value, onChange }}
      />
      <JsonDebug value={{ question, value }} />
    </div>
  );
};

storiesOf("Student/Questions/Multiple Choice", module).add("basic", () => (
  <TestHarness />
));
