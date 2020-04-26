import React from "react";
import { storiesOf } from "@storybook/react";
import questionSets from "../../../../testing/data/primm/questionSets";

import Question from "./Question";

const stories = storiesOf("Student/Questions/Question", module);

questionSets.forEach(({ caption, questions }) =>
  questions.forEach((question, i) => {
    stories.add(`${caption}/${question.type}`, () => (
      <Question question={question} />
    ));
  })
);
