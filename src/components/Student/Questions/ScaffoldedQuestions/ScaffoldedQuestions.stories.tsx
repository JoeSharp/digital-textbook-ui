import React from "react";
import { storiesOf } from "@storybook/react";
import ScaffoldedQuestions from "./ScaffoldedQuestions";
import {
  leadingQuestions,
  multipleChoiceQuestions,
  openEndedQuestions,
} from "../../../../testing/data/primm/scaffoldedQuestions";
import {
  IQuestionResponses,
  EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
  IScaffoldedQuestions,
} from "../../../../api/useQuestionApi/types";
import JsonDebug from "../../../../lib/JsonDebug";
import useObjectReducer from "../../../../lib/useObjectReducer";

interface Props {
  scaffoldedQuestions: IScaffoldedQuestions[];
}

const TestHarness: React.FunctionComponent<Props> = ({
  scaffoldedQuestions,
}) => {
  const studentResponseControlProps = useObjectReducer<IQuestionResponses>(
    EMPTY_SCAFFOLDED_QUESTION_RESPONSES
  );

  return (
    <div>
      <ScaffoldedQuestions
        scaffoldedQuestions={scaffoldedQuestions}
        studentResponseControlProps={studentResponseControlProps}
      />
      <JsonDebug value={{ value: studentResponseControlProps.value }} />
    </div>
  );
};

storiesOf("Student/Questions/Scaffolded Questions", module)
  .add("series", () => (
    <TestHarness
      scaffoldedQuestions={[
        openEndedQuestions,
        leadingQuestions,
        multipleChoiceQuestions,
      ]}
    />
  ))
  .add("openEnded", () => (
    <TestHarness scaffoldedQuestions={[openEndedQuestions]} />
  ))
  .add("leading", () => (
    <TestHarness scaffoldedQuestions={[leadingQuestions]} />
  ))
  .add("multipleChoice", () => (
    <TestHarness scaffoldedQuestions={[multipleChoiceQuestions]} />
  ));
