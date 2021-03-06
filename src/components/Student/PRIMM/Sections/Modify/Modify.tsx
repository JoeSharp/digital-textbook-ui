import React from "react";
import {
  IPrimmModify,
  IPrimmRemixResponse,
} from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedInstructions from "../../../ScaffoldedInstructions/ScaffoldedInstructions";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps<IPrimmRemixResponse> {
  modify: IPrimmModify;
}

const Modify: React.FunctionComponent<Props> = ({
  modify: { scaffoldedInstructions, codeWidget },
  ...rest
}) => {
  return (
    <Section title="Modify" {...rest}>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <ScaffoldedInstructions scaffoldedInstructions={scaffoldedInstructions} />
    </Section>
  );
};

export default Modify;
