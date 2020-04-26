import React from "react";
import { IQuestion, IQuestionType } from "../../../../api/types";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import FreeFlowQuestion from "../FreeFlowQuestion/FreeFlowQuestion";
import FreeFlowQuestionWithClue from "../FreeFlowQuestionWithClue";

interface Props {
  question: IQuestion;
}

const Question: React.FunctionComponent<Props> = ({ question }) => {
  if (question.type === IQuestionType.MultipleChoice) {
    return <MultipleChoiceQuestion question={question} />;
  } else if (question.type === IQuestionType.FreeFlow) {
    return <FreeFlowQuestion question={question} />;
  } else if (question.type === IQuestionType.FreeFlowWithClue) {
    return <FreeFlowQuestionWithClue question={question} />;
  }

  return <div>UNHANDLED QUESTION TYPE</div>;
};

export default Question;
