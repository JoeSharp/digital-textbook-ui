import React from "react";

import youTubeLogo from "./youtube.png";
import { YouTubeLinkType } from "../../../api/useEmbeddedIframeApi/types";

interface Props {
  youTubeLink: YouTubeLinkType;
}

const YouTubeButton: React.FunctionComponent<Props> = ({
  youTubeLink: { youTubeId, startTime = 0 },
}) => (
  <a
    target="video_instructions"
    href={`https://www.youtube.com/embed/${youTubeId}?start=${startTime}`}
  >
    <img src={youTubeLogo} alt="YouTube Logo" />
  </a>
);

export default YouTubeButton;
