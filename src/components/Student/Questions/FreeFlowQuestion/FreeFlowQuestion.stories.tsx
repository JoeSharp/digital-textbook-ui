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
  id: "lcdOpen",
  question: "What is the best colour for LCD displays?",
};

const TestHarness: React.FunctionComponent = () => {
  const [value, onChange] = React.useState("");

  return (
    <div>
      <FreeFlowQuestion
        question={question}
        studentResponse={{ value, onChange }}
      />
      <JsonDebug value={{ question, value }} />
    </div>
  );
};

storiesOf("Student/Questions/Free Flow", module).add("basic", () => (
  <TestHarness />
));
