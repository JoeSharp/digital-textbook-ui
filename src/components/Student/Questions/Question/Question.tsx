import React from "react";
import { IQuestion, IQuestionType } from "../../../../api/useQuestionApi/types";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import FreeFlowQuestion from "../FreeFlowQuestion/FreeFlowQuestion";
import FreeFlowQuestionWithClue from "../FreeFlowQuestionWithClue";
import { ControlledInput } from "../../../../lib/useForm/types";

interface Props {
  question: IQuestion;
  studentResponse: ControlledInput<string>;
}

const Question: React.FunctionComponent<Props> = ({
  question,
  studentResponse,
}) => {
  if (question.type === IQuestionType.MultipleChoice) {
    return (
      <MultipleChoiceQuestion
        question={question}
        studentResponse={studentResponse}
      />
    );
  } else if (question.type === IQuestionType.FreeFlow) {
    return (
      <FreeFlowQuestion question={question} studentResponse={studentResponse} />
    );
  } else if (question.type === IQuestionType.FreeFlowWithClue) {
    return (
      <FreeFlowQuestionWithClue
        question={question}
        studentResponse={studentResponse}
      />
    );
  }

  return <div>UNHANDLED QUESTION TYPE</div>;
};

export default Question;
