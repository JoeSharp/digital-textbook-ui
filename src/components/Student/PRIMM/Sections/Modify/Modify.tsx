import React from "react";
import { IPrimmModify } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedInstructions from "../../../ScaffoldedInstructions/ScaffoldedInstructions";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps {
  modify: IPrimmModify;
}

const Modify: React.FunctionComponent<Props> = ({
  modify: { scaffoldedInstructions, codeWidget },
  ...rest
}) => {
  return (
    <Section title="Modify" {...rest}>
      <ScaffoldedInstructions scaffoldedInstructions={scaffoldedInstructions} />
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </Section>
  );
};

export default Modify;
