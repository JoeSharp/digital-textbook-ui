import React from "react";
import { storiesOf } from "@storybook/react";
import EmbeddedIframe from "./EmbeddedIframe";

storiesOf("Embedded Iframe", module).add("Trinket", () => (
  <EmbeddedIframe
    embeddedIframe={{
      type: "trinket",
      trinketId: "21099fd5a6",
    }}
  />
));
