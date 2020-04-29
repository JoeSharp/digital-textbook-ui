import React from "react";

import { IScaffoldedQuestions } from "../../../../api/useQuestionApi/types";
import RequestScaffold, { useRequestScaffold } from "../../RequestScaffold";
import Question from "../Question/Question";

interface Props {
  scaffoldedQuestions: IScaffoldedQuestions[];
}

const ScaffoldedQuestions: React.FunctionComponent<Props> = ({
  scaffoldedQuestions,
}) => {
  const { componentProps } = useRequestScaffold({
    levelCaptions: React.useMemo(
      () => scaffoldedQuestions.map((q) => q.caption),
      [scaffoldedQuestions]
    ),
  });

  const { index } = componentProps;

  return (
    <div>
      <RequestScaffold {...componentProps} />
      {scaffoldedQuestions
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

export default ScaffoldedQuestions;
