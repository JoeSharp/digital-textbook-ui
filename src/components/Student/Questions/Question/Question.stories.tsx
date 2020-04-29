import React from "react";
import { storiesOf } from "@storybook/react";
import scaffoldedQuestions from "../../../../testing/data/primm/scaffoldedQuestions";

import Question from "./Question";

scaffoldedQuestions.forEach(({ caption, questions }) =>
  questions.forEach((question, i) => {
    storiesOf(
      "Student/Questions/Question",
      module
    ).add(`${caption}/${question.type}`, () => (
      <Question question={question} />
    ));
  })
);
