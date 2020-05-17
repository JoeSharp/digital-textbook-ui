import React from "react";
import { IMultipleChoiceQuestion } from "../../../../api/useQuestionApi/types";
import { ControlledInput } from "../../../../lib/useForm/types";

interface Props {
  question: IMultipleChoiceQuestion;
  studentResponseControlProps: ControlledInput<string>;
}

const MultipleChoiceQuestion: React.FunctionComponent<Props> = ({
  question: { question, options },
  studentResponseControlProps: { value, onChange },
}) => {
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => onChange(value),
    [onChange]
  );

  return (
    <div className="form-group">
      <label>{question}</label>
      {options.map((option) => (
        <div key={option} className="custom-control custom-radio">
          <input
            type="radio"
            id={option}
            value={option}
            name={question}
            className="custom-control-input"
            onChange={_onChange}
            checked={value === option}
          />
          <label className="custom-control-label" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
