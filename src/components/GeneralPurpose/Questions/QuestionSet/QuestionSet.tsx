import React from "react";

import { IQuestionSet } from "../../../../api/types";
import RequestHelp, { useRequestHelp } from "../RequestHelp";
import Question from "../Question/Question";

interface Props {
  questionSets: IQuestionSet[];
}

const QuestionSet: React.FunctionComponent<Props> = ({ questionSets }) => {
  const { componentProps } = useRequestHelp({ questionSets });

  const { index } = componentProps;

  return (
    <div>
      <RequestHelp {...componentProps} />
      {questionSets
        .filter((_, i) => i === index)
        .map(({ caption, questions }) => (
          <div key={caption}>
            {questions.map((question, i) => (
              <Question key={i} question={question} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default QuestionSet;
