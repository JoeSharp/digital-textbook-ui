import * as React from "react";

import { LessonTaskType } from "../../../../types";
import EmbeddedIFrame from "../../../EmbeddedIFrame";
import { YouTubeButton } from "../../../YouTube";

interface Props {
  task: LessonTaskType;
}

const LessonTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <React.Fragment>
      <div className="instruction-header">
        <h2>Task 1 - Draw a Hexagon with a Loop</h2>
        <p>{task.description}</p>
        <div className="instruction-header--link">
          <YouTubeButton youTubeLink={task.youTubeLink} />
        </div>
      </div>

      <EmbeddedIFrame embeddedIFrame={task.embeddedIFrame} />
    </React.Fragment>
  );
};

export default LessonTask;
