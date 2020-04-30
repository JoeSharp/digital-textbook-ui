import React from "react";
import { IFreeFlowWithClueQuestion } from "../../../../api/useQuestionApi/types";

interface Props {
  question: IFreeFlowWithClueQuestion;
}

const FreeFlowQuestionWithClue: React.FunctionComponent<Props> = ({
  question,
}) => {
  return (
    <div className="form-group">
      <label>{question.question}</label>
      <input className="form-control" />
      <small id="emailHelp" className="form-text text-muted">
        {" "}
        {question.clue}
      </small>
    </div>
  );
};

export default FreeFlowQuestionWithClue;
