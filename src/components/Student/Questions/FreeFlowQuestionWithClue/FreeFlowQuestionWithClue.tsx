import React from "react";
import { IFreeFlowWithClueQuestion } from "../../../../api/types";

interface Props {
  question: IFreeFlowWithClueQuestion;
}

const FreeFlowQuestionWithClue: React.FunctionComponent<Props> = ({
  question,
}) => {
  return (
    <div>
      <p>{question.question}</p>
      <p>{question.clue}</p>
      <input />
    </div>
  );
};

export default FreeFlowQuestionWithClue;
