import * as React from "react";

import { EmbeddedIFrameType } from "../../types";

interface Props {
  embeddedIFrame: EmbeddedIFrameType;
}

const EmbeddedIFrame: React.FunctionComponent<Props> = ({ embeddedIFrame }) => {
  if (embeddedIFrame.type === "trinket") {
    return (
      <iframe
        className="trinket"
        src={`https://trinket.io/embed/python/${embeddedIFrame.trinketId}?showInstructions=true`}
        frameBorder="0"
        marginWidth={0}
        marginHeight={0}
        allowFullScreen
        title={`Trinket IFrame ${embeddedIFrame.trinketId}`}
      ></iframe>
    );
  }

  return <div>UNKNOWN EMBED TYPE</div>;
};

export default EmbeddedIFrame;
