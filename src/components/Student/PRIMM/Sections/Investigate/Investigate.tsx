import React from "react";
import { IPrimmInvestigate } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import Section, { BaseProps } from "../Section";
import ScaffoldedQuestions from "../../../Questions/ScaffoldedQuestions";

interface Props extends BaseProps {
  investigate: IPrimmInvestigate;
}

const Predict: React.FunctionComponent<Props> = ({
  investigate: { codeWidget, scaffoldedQuestions },
  ...rest
}) => {
  return (
    <Section title="Investigate" {...rest}>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <ScaffoldedQuestions scaffoldedQuestions={scaffoldedQuestions} />
    </Section>
  );
};

export default Predict;
