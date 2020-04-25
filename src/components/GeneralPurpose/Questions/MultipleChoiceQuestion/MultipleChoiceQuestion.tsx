import React, { ChangeEventHandler } from "react";
import { IMultipleChoiceQuestion } from "../../../../api/types";
import Button from "../../Buttons/Button";
import useCounter from "../../../../lib/useCounter";

interface Props {
  question: IMultipleChoiceQuestion;
  value: string | undefined;
  isCorrect: boolean;
  attempts: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}

const MultipleChoiceQuestion: React.FunctionComponent<Props> = ({
  onSubmit,
  onChange,
  value,
  attempts,
  isCorrect,
  question: { question, options },
}) => {
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

interface UseMultipleChoiceQuestionIn {
  question: IMultipleChoiceQuestion;
}

interface UseMultipleChoiceQuestion {
  componentProps: Props;
}

export const useMultipleChoiceQuestion = ({
  question,
}: UseMultipleChoiceQuestionIn): UseMultipleChoiceQuestion => {
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
    setIsCorrect(value === question.correctOption);
  }, [question, value, addAttempt]);

  return {
    componentProps: {
      attempts,
      isCorrect,
      onChange,
      value,
      onSubmit,
      question,
    },
  };
};

export default MultipleChoiceQuestion;
