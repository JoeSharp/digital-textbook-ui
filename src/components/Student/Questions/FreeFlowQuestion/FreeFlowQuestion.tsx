import React from "react";
import { IFreeFlowQuestion } from "../../../../api/useQuestionApi/types";
import { ControlledInput } from "../../../../lib/useForm/types";

interface Props {
  question: IFreeFlowQuestion;
  studentResponse: ControlledInput<string>;
}

const FreeFlowQuestion: React.FunctionComponent<Props> = ({
  question,
  studentResponse: { value, onChange },
}) => {
  const _onChange: React.ChangeEventHandler<HTMLTextAreaElement> = React.useCallback(
    ({ target: { value } }) => onChange(value),
    [onChange]
  );

  return (
    <div className="form-group">
      <label>{question.question}</label>
      <textarea className="form-control" onChange={_onChange} value={value} />
    </div>
  );
};

export default FreeFlowQuestion;
