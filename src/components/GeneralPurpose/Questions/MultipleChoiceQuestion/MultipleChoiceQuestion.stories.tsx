import React from "react";
import { storiesOf } from "@storybook/react";
import MultipleChoiceQuestion, {
  useMultipleChoiceQuestion,
} from "./MultipleChoiceQuestion";
import { IMultipleChoiceQuestion } from "../../../../api/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IMultipleChoiceQuestion = {
  type: "MultipleChoice",
  question: "What is the best colour for LCD displays?",
  correctOption: "Blue",
  options: ["Red", "Green", "Blue"],
};

const TestHarness: React.FunctionComponent = () => {
  const { componentProps } = useMultipleChoiceQuestion({
    question,
  });

  const { attempts, isCorrect } = componentProps;

  return (
    <div>
      <MultipleChoiceQuestion {...componentProps} />
      <JsonDebug value={{ question, attempts, isCorrect }} />
    </div>
  );
};

storiesOf("General Purpose/Questions/Multiple Choice", module).add(
  "basic",
  () => <TestHarness />
);
