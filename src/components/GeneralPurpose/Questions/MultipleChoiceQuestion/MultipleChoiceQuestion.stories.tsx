import React from "react";
import { storiesOf } from "@storybook/react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { IMultipleChoiceQuestion, IQuestionType } from "../../../../api/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IMultipleChoiceQuestion = {
  type: IQuestionType.MultipleChoice,
  question: "What is the best colour for LCD displays?",
  correctOption: "Blue",
  options: ["Red", "Green", "Blue"],
};

const TestHarness: React.FunctionComponent = () => {
  return (
    <div>
      <MultipleChoiceQuestion question={question} />
      <JsonDebug value={{ question }} />
    </div>
  );
};

storiesOf("General Purpose/Questions/Multiple Choice", module).add(
  "basic",
  () => <TestHarness />
);
