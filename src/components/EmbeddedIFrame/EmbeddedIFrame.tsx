import React from "react";

import { EmbeddedIframeType } from "../../types";

interface Props {
  embeddedIframe: EmbeddedIframeType;
}

const EmbeddedIframe: React.FunctionComponent<Props> = ({ embeddedIframe }) => {
  if (embeddedIframe.type === "trinket") {
    return (
      <iframe
        className="trinket"
        src={`https://trinket.io/embed/python/${embeddedIframe.trinketId}?showInstructions=true`}
        frameBorder="0"
        marginWidth={0}
        marginHeight={0}
        allowFullScreen
        title={`Trinket Iframe ${embeddedIframe.trinketId}`}
      ></iframe>
    );
  }

  return <div>UNKNOWN EMBED TYPE</div>;
};

export default EmbeddedIframe;
