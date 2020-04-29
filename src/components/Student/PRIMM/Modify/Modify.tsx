import React from "react";
import { IPrimmModify } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";

interface Props {
  modify: IPrimmModify;
}

const Modify: React.FunctionComponent<Props> = ({
  modify: { instructions, codeWidget },
}) => {
  return (
    <div>
      <h4>Modify</h4>
      <p>{instructions}</p>
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </div>
  );
};

export default Modify;
