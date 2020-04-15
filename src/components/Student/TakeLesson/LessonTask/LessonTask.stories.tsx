import React from "react";
import { storiesOf } from "@storybook/react";

import LessonTask from "./LessonTask";

storiesOf("Student/Lesson", module).add("Basic", () => (
  <LessonTask
    task={{
      title: "Draw a Hexagon",
      lessonId: "STUFF",
      description: "You will use the turtle commands to draw a hexagon",
      embeddedIFrame: {
        type: "trinket",
        trinketId: "21099fd5a6",
      },
      youTubeLink: {
        youTubeId: "0ttRqO1y8MA",
        startTime: 14,
      },
    }}
  />
));
