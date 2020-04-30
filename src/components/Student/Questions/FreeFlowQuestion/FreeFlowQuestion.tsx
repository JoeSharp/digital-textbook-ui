import React from "react";
import { IFreeFlowQuestion } from "../../../../api/useQuestionApi/types";

interface Props {
  question: IFreeFlowQuestion;
}

const FreeFlowQuestion: React.FunctionComponent<Props> = ({ question }) => {
  return (
    <div className="form-group">
      <label>{question.question}</label>
      <textarea className="form-control" />
    </div>
  );
};

export default FreeFlowQuestion;
