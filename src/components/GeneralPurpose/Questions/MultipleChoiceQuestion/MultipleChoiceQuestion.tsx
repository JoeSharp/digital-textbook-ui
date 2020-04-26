import React, { ChangeEventHandler } from "react";
import { IMultipleChoiceQuestion } from "../../../../api/types";
import Button from "../../Buttons/Button";
import useCounter from "../../../../lib/useCounter";

interface Props {
  question: IMultipleChoiceQuestion;
}

const MultipleChoiceQuestion: React.FunctionComponent<Props> = ({
  question: { question, correctOption, options },
}) => {
  const [value, setValue] = React.useState<string>();
  const [isCorrect, setIsCorrect] = React.useState<boolean>(false);
  const { value: attempts, increment: addAttempt } = useCounter();

  const onChange: ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onSubmit = React.useCallback(() => {
    addAttempt();
    setIsCorrect(value === correctOption);
  }, [correctOption, value, addAttempt]);

  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={question}
            value={option}
            onChange={onChange}
            checked={value === option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <div>Attempts: {attempts}</div>
      {(!isCorrect && (
        <Button text="Submit" onClick={onSubmit} styleType="primary" />
      )) || <div>CORRECT</div>}
    </div>
  );
};

export default MultipleChoiceQuestion;
