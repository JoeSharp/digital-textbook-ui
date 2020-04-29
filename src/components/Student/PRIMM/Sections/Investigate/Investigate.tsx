import React from "react";
import { IPrimmInvestigate } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps {
  investigate: IPrimmInvestigate;
}

const Predict: React.FunctionComponent<Props> = ({
  investigate: { codeWidget },
  ...rest
}) => {
  return (
    <Section title="Investigate" {...rest}>
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </Section>
  );
};

export default Predict;
