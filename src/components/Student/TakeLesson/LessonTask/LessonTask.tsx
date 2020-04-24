import React from "react";

import { ITask } from "../../../../types";

interface Props {
  task: ITask;
}

const LessonTask: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <React.Fragment>
      <div className="instruction-header">
        <h2>Task 1 - Draw a Hexagon with a Loop</h2>
        <p>{task.instruction}</p>
        <div className="instruction-header--link">
          {/* <YouTubeButton youTubeLink={task.videoLink} /> */}
        </div>
      </div>

      {/* <EmbeddedIframe embeddedIframe={task.embeddedIframe} /> */}
    </React.Fragment>
  );
};

export default LessonTask;
