import React from "react";
import { storiesOf } from "@storybook/react";
import FreeFlowQuestion from "./FreeFlowQuestion";
import {
  IFreeFlowQuestion,
  IQuestionType,
} from "../../../../api/useQuestionApi/types";
import JsonDebug from "../../../../lib/JsonDebug";

const question: IFreeFlowQuestion = {
  type: IQuestionType.FreeFlow,
  question: "What is the best colour for LCD displays?",
};

const TestHarness: React.FunctionComponent = () => {
  return (
    <div>
      <FreeFlowQuestion question={question} />
      <JsonDebug value={{ question }} />
    </div>
  );
};

storiesOf("Student/Questions/Free Flow", module).add("basic", () => (
  <TestHarness />
));
