import React from "react";
import { IEmbeddedTrinket } from "../../../../api/useEmbeddedIframeApi/types";

import "./styles.css";
import useEmbeddedTrinketUrl from "./useEmbeddedTrinketUrl";

interface Props {
  trinket: IEmbeddedTrinket;
}

const EmbeddedTrinket: React.FunctionComponent<Props> = ({ trinket }) => {
  return (
    <iframe
      className="trinket"
      src={useEmbeddedTrinketUrl(trinket)}
      frameBorder="0"
      marginWidth={0}
      marginHeight={0}
      allowFullScreen
      title={`Trinket Iframe ${trinket.trinketId}`}
    ></iframe>
  );
};

export default EmbeddedTrinket;
