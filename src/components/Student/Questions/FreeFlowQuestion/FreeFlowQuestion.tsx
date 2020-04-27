import React from "react";
import { IFreeFlowQuestion } from "../../../../api/useQuestionApi/types";

interface Props {
  question: IFreeFlowQuestion;
}

const FreeFlowQuestion: React.FunctionComponent<Props> = ({ question }) => {
  return (
    <div>
      <p>{question.question}</p>
      <textarea />
    </div>
  );
};

export default FreeFlowQuestion;
