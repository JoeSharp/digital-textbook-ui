import React from "react";
import { IPrimmModify } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";

interface Props {
  modify: IPrimmModify;
}

const Modify: React.FunctionComponent<Props> = ({ modify: { codeWidget } }) => {
  return (
    <div>
      <h4>Modify</h4>
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </div>
  );
};

export default Modify;
