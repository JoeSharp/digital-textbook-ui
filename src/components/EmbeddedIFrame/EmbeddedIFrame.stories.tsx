import * as React from "react";
import EmbeddedIFrame from "./EmbeddedIFrame";

export default {
  title: "Embedded IFrame",
  component: EmbeddedIFrame
};

export const EmbeddedTrinket = () => (
  <EmbeddedIFrame
    embeddedIFrame={{
      type: "trinket",
      trinketId: "21099fd5a6"
    }}
  />
);
