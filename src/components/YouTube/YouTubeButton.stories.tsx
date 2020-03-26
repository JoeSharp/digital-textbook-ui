import * as React from "react";
import YouTubeButton from "./YouTubeButton";

export default {
  title: "YouTube Button",
  component: YouTubeButton
};

export const StartAtZero = () => (
  <YouTubeButton youTubeLink={{ youTubeId: "0ttRqO1y8MA" }} />
);

export const StartMidwayThrough = () => (
  <YouTubeButton youTubeLink={{ youTubeId: "0ttRqO1y8MA", startTime: 14 }} />
);
