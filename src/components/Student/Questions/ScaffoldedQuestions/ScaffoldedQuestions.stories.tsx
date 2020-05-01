import React from "react";
import { storiesOf } from "@storybook/react";
import ScaffoldedQuestions from "./ScaffoldedQuestions";
import scaffoldedQuestions from "../../../../testing/data/primm/scaffoldedQuestions";
import {
  IQuestionResponses,
  EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
} from "../../../../api/useQuestionApi/types";
import JsonDebug from "../../../../lib/JsonDebug";
import useObjectReducer from "../../../../lib/useObjectReducer";

const TestHarness: React.FunctionComponent = () => {
  const studentResponse = useObjectReducer<IQuestionResponses>(
    EMPTY_SCAFFOLDED_QUESTION_RESPONSES
  );

  return (
    <div>
      <ScaffoldedQuestions
        scaffoldedQuestions={scaffoldedQuestions}
        studentResponse={studentResponse}
      />
      <JsonDebug value={{ value: studentResponse.value }} />
    </div>
  );
};

storiesOf("Student/Questions/Scaffolded Questions", module).add("basic", () => (
  <TestHarness />
));
