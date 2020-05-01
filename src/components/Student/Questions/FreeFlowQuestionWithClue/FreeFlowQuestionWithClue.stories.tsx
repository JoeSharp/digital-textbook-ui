import React from "react";
import { storiesOf } from "@storybook/react";
import FreeFlowQuestionWithClue from "./FreeFlowQuestionWithClue";
import {
  IFreeFlowWithClueQuestion,
  IQuestionType,
} from "../../../../api/useQuestionApi/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IFreeFlowWithClueQuestion = {
  type: IQuestionType.FreeFlowWithClue,
  id: "lcdClue",
  question: "What is the best colour for LCD displays?",
  clue: "It is so obviously blue...",
};

const TestHarness: React.FunctionComponent = () => {
  const [value, onChange] = React.useState("");

  return (
    <div>
      <FreeFlowQuestionWithClue
        question={question}
        studentResponse={{ value, onChange }}
      />
      <JsonDebug value={{ question, value }} />
    </div>
  );
};

storiesOf("Student/Questions/Free Flow with Question", module).add(
  "basic",
  () => <TestHarness />
);
