import React from "react";

import {
  IScaffoldedQuestions,
  IQuestionResponses,
  IQuestion,
} from "../../../../api/useQuestionApi/types";
import RequestScaffold, { useRequestScaffold } from "../../RequestScaffold";
import Question from "../Question/Question";
import { UseObjectReducer } from "../../../../lib/useObjectReducer/types";

interface Props {
  scaffoldedQuestions: IScaffoldedQuestions[];
  studentResponse: UseObjectReducer<IQuestionResponses>;
}

interface QuestionWithHandler {
  question: IQuestion;
  onChange: (v: string) => void;
}

const ScaffoldedQuestions: React.FunctionComponent<Props> = ({
  scaffoldedQuestions,
  studentResponse: { onChange, value },
}) => {
  const { componentProps } = useRequestScaffold({
    levelCaptions: React.useMemo(
      () => scaffoldedQuestions.map((q) => q.caption),
      [scaffoldedQuestions]
    ),
  });

  const { index } = componentProps;
  const caption = scaffoldedQuestions
    .filter((_, i) => i === index)
    .map((q) => q.caption)
    .reduce((acc, curr) => curr, "");
  const qWithHandlers: QuestionWithHandler[] = React.useMemo(() => {
    const qs: QuestionWithHandler[] = [];

    scaffoldedQuestions
      .filter((_, i) => i === index)
      .map(({ questions }) =>
        questions.forEach((question) => {
          qs.push({
            question,
            onChange: (v) => onChange({ [question.id]: v }),
          });
        })
      );

    return qs;
  }, [index, onChange, scaffoldedQuestions]);

  return (
    <div>
      <RequestScaffold {...componentProps} />
      <h4>{caption}</h4>
      {qWithHandlers.map(({ question, onChange }) => (
        <Question
          key={question.id}
          question={question}
          studentResponse={{ onChange, value: value[question.id] || "" }}
        />
      ))}
    </div>
  );
};

export default ScaffoldedQuestions;
