import React from "react";
import { storiesOf } from "@storybook/react";
import EmbeddedIframe from "./EmbeddedIframe";
import { IEmbeddedIframeSystem } from "../../../types";

storiesOf("General Purpose/Embedded Iframe", module)
  .add("Trinket", () => (
    <EmbeddedIframe
      embeddedIframe={{
        system: IEmbeddedIframeSystem.Trinket,
        trinketId: "21099fd5a6",
      }}
    />
  ))
  .add("p5_js", () => (
    <EmbeddedIframe
      embeddedIframe={{
        system: IEmbeddedIframeSystem.p5js,
        sketchId: "HbRNJwhrZ",
      }}
    />
  ))
  .add("codepen", () => (
    <EmbeddedIframe
      embeddedIframe={{
        system: IEmbeddedIframeSystem.codePen,
        codePenId: "rmRKmY",
      }}
    />
  ))
  .add("code.org", () => (
    <EmbeddedIframe
      embeddedIframe={{
        system: IEmbeddedIframeSystem.codeDotOrg,
        projectId: "g8J3vaCgYzdjexcBcW4Rwxx9t1fH7Zw03MqYono30sw",
      }}
    />
  ))
  .add("github", () => (
    <EmbeddedIframe
      embeddedIframe={{
        system: IEmbeddedIframeSystem.gitHubGist,
        gistId: "3a08be71dc0fd760141c0c6cddc96cdf",
      }}
    />
  ));
