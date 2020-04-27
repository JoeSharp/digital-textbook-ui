import React from "react";
import { storiesOf } from "@storybook/react";
import questionSets from "../../../../testing/data/primm/questionSets";

import Question from "./Question";

questionSets.forEach(({ caption, questions }) =>
  questions.forEach((question, i) => {
    storiesOf(
      "Student/Questions/Question",
      module
    ).add(`${caption}/${question.type}`, () => (
      <Question question={question} />
    ));
  })
);
