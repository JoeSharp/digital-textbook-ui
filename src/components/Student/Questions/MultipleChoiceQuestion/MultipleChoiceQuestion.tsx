import React from "react";
import { IMultipleChoiceQuestion } from "../../../../api/types";

interface Props {
  question: IMultipleChoiceQuestion;
}

const MultipleChoiceQuestion: React.FunctionComponent<Props> = ({
  question: { question, options },
}) => {
  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <div key={option}>
          <input type="radio" id={option} name={question} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
