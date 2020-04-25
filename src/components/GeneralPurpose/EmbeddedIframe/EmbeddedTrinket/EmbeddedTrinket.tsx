import React from "react";
import { IEmbeddedTrinket } from "../../../../api/types";

interface Props {
  trinket: IEmbeddedTrinket;
}

const EmbeddedTrinket: React.FunctionComponent<Props> = ({
  trinket: { trinketId },
}) => (
  <iframe
    className="trinket"
    src={`https://trinket.io/embed/python/${trinketId}?showInstructions=true`}
    frameBorder="0"
    marginWidth={0}
    marginHeight={0}
    allowFullScreen
    title={`Trinket Iframe ${trinketId}`}
  ></iframe>
);

export default EmbeddedTrinket;
