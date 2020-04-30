import React from "react";
import Button from "../../../GeneralPurpose/Buttons/Button";

export interface BaseProps {
  canGoPrevious: boolean;
  onPrevious: () => any;
  canGoNext: boolean;
  onNext: () => any;
}

interface Props extends BaseProps {
  title: string;
}

const Section: React.FunctionComponent<Props> = ({
  title,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  children,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}

      {canGoPrevious && (
        <Button text="Previous" onClick={onPrevious} styleType="primary" />
      )}
      {canGoNext && <Button text="Next" onClick={onNext} styleType="primary" />}
    </div>
  );
};

export default Section;
