import React from "react";
import Button from "../../../GeneralPurpose/Buttons/Button";

import "./styles.css";

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

      <div className="navButtons">
        {canGoPrevious && (
          <Button
            className="previousButton"
            text="Previous"
            onClick={onPrevious}
            styleType="primary"
          />
        )}
        {canGoNext && (
          <Button
            className="nextButton"
            text="Next"
            onClick={onNext}
            styleType="primary"
          />
        )}
      </div>
    </div>
  );
};

export default Section;
