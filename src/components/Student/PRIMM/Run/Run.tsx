import React from "react";
import { IPrimmRun } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";

interface Props {
  run: IPrimmRun;
}

const Run: React.FunctionComponent<Props> = ({ run }) => {
  return (
    <div>
      <h4>Run</h4>
      <EmbeddedIframe embeddedIframe={run.codeWidget} />
      <label>How does the output compare with your prediction?</label>
      <textarea />
    </div>
  );
};

export default Run;
