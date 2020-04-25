import React from "react";
import { storiesOf } from "@storybook/react";
import YouTubeButton from "./YouTubeButton";

storiesOf("General Purpose/YouTube Button", module)
  .add("Start At Zero", () => (
    <YouTubeButton youTubeLink={{ youTubeId: "0ttRqO1y8MA" }} />
  ))
  .add("Start Midway Through", () => (
    <YouTubeButton youTubeLink={{ youTubeId: "0ttRqO1y8MA", startTime: 14 }} />
  ));
