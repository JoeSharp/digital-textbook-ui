import React from "react";
import {
  IPrimmRun,
  IPrimmRunResponse,
} from "../../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../../GeneralPurpose/EmbeddedIframe";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps<IPrimmRunResponse> {
  run: IPrimmRun;
}

const Run: React.FunctionComponent<Props> = ({ run, ...rest }) => {
  const { value, onChange } = rest.studentResponseControlProps;

  const onCompareChange: React.ChangeEventHandler<HTMLTextAreaElement> = React.useCallback(
    ({ target: { value } }) => {
      onChange({ predictionComparison: value });
    },
    [onChange]
  );

  return (
    <Section title="Run" {...rest}>
      <EmbeddedIframe embeddedIframe={run.codeWidget} />
      <div className="form-group">
        <label htmlFor="compareWithPrediction">
          How does the output compare with your prediction?
        </label>
        <textarea
          id="compareWithPrediction"
          className="form-control"
          value={value.predictionComparison}
          onChange={onCompareChange}
        />
      </div>
    </Section>
  );
};

export default Run;
