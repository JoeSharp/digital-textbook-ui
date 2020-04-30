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
      <div className="form-group">
        <label htmlFor="compareWithPrediction">
          How does the output compare with your prediction?
        </label>
        <textarea id="compareWithPrediction" className="form-control" />
      </div>
    </Section>
  );
};

export default Run;
