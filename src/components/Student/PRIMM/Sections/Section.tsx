import React from "react";
import Button from "../../../GeneralPurpose/Buttons/Button";

export interface BaseProps {
  isComplete: boolean;
  onComplete: () => any;
}

interface Props extends BaseProps {
  title: string;
}

const Section: React.FunctionComponent<Props> = ({
  title,
  onComplete,
  isComplete,
  children,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}

      {!isComplete && (
        <Button text="Complete" onClick={onComplete} styleType="primary" />
      )}
    </div>
  );
};

export default Section;
