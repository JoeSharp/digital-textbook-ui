import React from "react";
import { IFreeFlowWithClueQuestion } from "../../../../api/useQuestionApi/types";
import { ControlledInput } from "../../../../lib/useForm/types";

interface Props {
  question: IFreeFlowWithClueQuestion;
  studentResponseControlProps: ControlledInput<string>;
}

const FreeFlowQuestionWithClue: React.FunctionComponent<Props> = ({
  question,
  studentResponseControlProps: { value, onChange },
}) => {
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => onChange(value),
    [onChange]
  );

  return (
    <div className="form-group">
      <label>{question.question}</label>
      <input className="form-control" onChange={_onChange} value={value} />
      <small id="emailHelp" className="form-text text-muted">
        {" "}
        {question.clue}
      </small>
    </div>
  );
};

export default FreeFlowQuestionWithClue;
