import React from "react";
import { IEmbeddedP5Sketch } from "../../../../types";

interface Props {
  sketch: IEmbeddedP5Sketch;
}

const EmbeddedP5Sketch: React.FunctionComponent<Props> = ({
  sketch: { sketchId },
}) => (
  <iframe
    title="Sketch"
    src={`https://editor.p5js.org/RatraceJoe/embed/${sketchId}`}
  ></iframe>
);

export default EmbeddedP5Sketch;
