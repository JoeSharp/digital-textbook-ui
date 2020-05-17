import React from "react";
import { storiesOf } from "@storybook/react";
import scaffoldedQuestions from "../../../../testing/data/primm/scaffoldedQuestions";

import { IQuestion } from "../../../../api/useQuestionApi/types";
import Question from "./Question";

interface Props {
  question: IQuestion;
}

const TestHarness: React.FunctionComponent<Props> = ({ question }) => {
  const [value, onChange] = React.useState<string>("");

  return (
    <Question
      question={question}
      studentResponseControlProps={{ value, onChange }}
    />
  );
};

scaffoldedQuestions.forEach(({ caption, questions }) =>
  questions.forEach((question, i) => {
    storiesOf(
      "Student/Questions/Question/From Test Data",
      module
    ).add(`${caption}/${question.id}`, () => (
      <TestHarness question={question} />
    ));
  })
);
