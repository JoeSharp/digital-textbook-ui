import React from "react";
import { IPrimmModify } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedInstructions from "../../ScaffoldedInstructions/ScaffoldedInstructions";

interface Props {
  modify: IPrimmModify;
}

const Modify: React.FunctionComponent<Props> = ({
  modify: { scaffoldedInstructions, codeWidget },
}) => {
  return (
    <div>
      <h4>Modify</h4>
      <ScaffoldedInstructions scaffoldedInstructions={scaffoldedInstructions} />
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </div>
  );
};

export default Modify;
