import React from "react";
import { storiesOf } from "@storybook/react";

import LessonTask from "./LessonTask";
import { IEmbeddedIframeSystem } from "../../../../api/types";
import { ITaskType } from "../../../../api/useTaskApi/types";

storiesOf("Student/Lesson", module).add("Basic", () => (
  <LessonTask
    task={{
      lessonId: "STUFF",
      title: "Draw a Hexagon",
      instruction: "You will use the turtle commands to draw a hexagon",
      videoLink: "",
      type: ITaskType.EmbeddedIframe,
      iframe: {
        system: IEmbeddedIframeSystem.Trinket,
        trinketId: "21099fd5a6",
      },
    }}
  />
));
