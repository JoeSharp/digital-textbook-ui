import React from "react";
import { IPrimmRun } from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps {
  run: IPrimmRun;
}

const Run: React.FunctionComponent<Props> = ({ run, ...rest }) => {
  return (
    <Section title="Run" {...rest}>
      <EmbeddedIframe embeddedIframe={run.codeWidget} />
      <label>How does the output compare with your prediction?</label>
      <textarea />
    </Section>
  );
};

export default Run;
