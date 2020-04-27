import React from "react";
import { IPrimmMake } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";

interface Props {
  make: IPrimmMake;
}

const Modify: React.FunctionComponent<Props> = ({ make: { codeWidget } }) => {
  return (
    <div>
      <h4>Make</h4>
      <EmbeddedIframe embeddedIframe={codeWidget} />
    </div>
  );
};

export default Modify;
