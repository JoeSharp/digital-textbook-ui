import React from "react";
import { IPrimmInvestigate } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";

interface Props {
  investigate: IPrimmInvestigate;
}

const Predict: React.FunctionComponent<Props> = ({
  investigate: { codeWidget },
}) => {
  return (
    <div>
      <h4>Investigate</h4>
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </div>
  );
};

export default Predict;
