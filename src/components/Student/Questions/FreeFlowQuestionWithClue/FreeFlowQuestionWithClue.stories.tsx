import React from "react";
import { storiesOf } from "@storybook/react";
import FreeFlowQuestionWithClue from "./FreeFlowQuestionWithClue";
import {
  IFreeFlowWithClueQuestion,
  IQuestionType,
} from "../../../../api/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IFreeFlowWithClueQuestion = {
  type: IQuestionType.FreeFlowWithClue,
  question: "What is the best colour for LCD displays?",
  clue: "It is so obviously blue...",
};

const TestHarness: React.FunctionComponent = () => {
  return (
    <div>
      <FreeFlowQuestionWithClue question={question} />
      <JsonDebug value={{ question }} />
    </div>
  );
};

storiesOf("Student/Questions/Free Flow with Question", module).add(
  "basic",
  () => <TestHarness />
);
