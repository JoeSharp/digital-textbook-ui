import React from "react";
import { IEmbeddedP5Sketch } from "../../../../api/useEmbeddedIframeApi/types";

import "./styles.css";

interface Props {
  sketch: IEmbeddedP5Sketch;
}

const EmbeddedP5Sketch: React.FunctionComponent<Props> = ({
  sketch: { sketchId, embedType },
}) => (
  <iframe
    className="p5sketch"
    title="Sketch"
    src={`https://editor.p5js.org/RatraceJoe/${embedType}/${sketchId}`}
    scrolling="no"
    frameBorder="0"
  ></iframe>
);

export default EmbeddedP5Sketch;
