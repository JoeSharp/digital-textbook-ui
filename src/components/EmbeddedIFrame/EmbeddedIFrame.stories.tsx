import React from "react";
import { storiesOf } from "@storybook/react";
import EmbeddedIFrame from "./EmbeddedIFrame";

storiesOf("Embedded IFrame", module).add("Trinket", () => (
  <EmbeddedIFrame
    embeddedIFrame={{
      type: "trinket",
      trinketId: "21099fd5a6",
    }}
  />
));
