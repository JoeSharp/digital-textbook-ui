import React from "react";
import { IPrimmPredict } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedQuestions from "../../../Questions/ScaffoldedQuestions";
import Section, { BaseProps } from "../Section";
import { IQuestionResponses } from "../../../../../api/useQuestionApi/types";

interface Props extends BaseProps<IQuestionResponses> {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({
  predict: { codeWidget, scaffoldedQuestions },
  ...rest
}) => {
  return (
    <Section title="Predict" {...rest}>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <ScaffoldedQuestions
        scaffoldedQuestions={scaffoldedQuestions}
        studentResponseControlProps={rest.studentResponseControlProps}
      />
    </Section>
  );
};

export default Predict;
