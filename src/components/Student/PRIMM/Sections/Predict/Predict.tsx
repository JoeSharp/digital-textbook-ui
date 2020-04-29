import React from "react";
import { IPrimmPredict } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedQuestions from "../../../Questions/ScaffoldedQuestions";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({
  predict: { codeWidget, scaffoldedQuestions },
  ...rest
}) => {
  return (
    <Section title="Predict" {...rest}>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <ScaffoldedQuestions scaffoldedQuestions={scaffoldedQuestions} />
    </Section>
  );
};

export default Predict;
