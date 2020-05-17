import React from "react";
import { IQuestion, IQuestionType } from "../../../../api/useQuestionApi/types";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import FreeFlowQuestion from "../FreeFlowQuestion/FreeFlowQuestion";
import FreeFlowQuestionWithClue from "../FreeFlowQuestionWithClue";
import { ControlledInput } from "../../../../lib/useForm/types";

interface Props {
  question: IQuestion;
  studentResponseControlProps: ControlledInput<string>;
}

const Question: React.FunctionComponent<Props> = ({
  question,
  studentResponseControlProps,
}) => {
  if (question.type === IQuestionType.MultipleChoice) {
    return (
      <MultipleChoiceQuestion
        question={question}
        studentResponseControlProps={studentResponseControlProps}
      />
    );
  } else if (question.type === IQuestionType.FreeFlow) {
    return (
      <FreeFlowQuestion
        question={question}
        studentResponseControlProps={studentResponseControlProps}
      />
    );
  } else if (question.type === IQuestionType.FreeFlowWithClue) {
    return (
      <FreeFlowQuestionWithClue
        question={question}
        studentResponseControlProps={studentResponseControlProps}
      />
    );
  }

  return <div>UNHANDLED QUESTION TYPE</div>;
};

export default Question;
