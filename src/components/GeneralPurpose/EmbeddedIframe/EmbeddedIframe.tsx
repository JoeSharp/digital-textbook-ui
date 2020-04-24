import React from "react";

import { IEmbeddedIframe, IEmbeddedIframeSystem } from "../../../types";
import EmbeddedTrinket from "./EmbeddedTrinket";
import EmbeddedCodeDotOrg from "./EmbeddedCodeDotOrg";
import EmbeddedCodePen from "./EmbeddedCodePen";
import Gist from "react-gist";
import EmbeddedP5Sketch from "./EmbeddedP5Sketch";

interface Props {
  embeddedIframe: IEmbeddedIframe;
}

const EmbeddedIframe: React.FunctionComponent<Props> = ({ embeddedIframe }) => {
  if (embeddedIframe.system === IEmbeddedIframeSystem.Trinket) {
    return <EmbeddedTrinket trinket={embeddedIframe} />;
  } else if (embeddedIframe.system === IEmbeddedIframeSystem.codeDotOrg) {
    return <EmbeddedCodeDotOrg project={embeddedIframe} />;
  } else if (embeddedIframe.system === IEmbeddedIframeSystem.codePen) {
    return <EmbeddedCodePen codePen={embeddedIframe} />;
  } else if (embeddedIframe.system === IEmbeddedIframeSystem.gitHubGist) {
    return <Gist id={embeddedIframe.gistId} />;
  } else if (embeddedIframe.system === IEmbeddedIframeSystem.p5js) {
    return <EmbeddedP5Sketch sketch={embeddedIframe} />;
  }

  return <div>UNKNOWN EMBED TYPE</div>;
};

export default EmbeddedIframe;
