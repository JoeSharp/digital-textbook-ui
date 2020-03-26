import * as React from "react";

import { useLessonApi } from "../../lib/api";
import LessonTask from "./LessonTask";

interface Props {
  lessonId: string;
}

const Lesson: React.FunctionComponent<Props> = ({ lessonId }) => {
  const { lesson } = useLessonApi({ lessonId });

  return (
    <div>
      <h1>{lesson.name}</h1>
      {lesson.tasks.map((task, i) => (
        <LessonTask key={i} task={task} />
      ))}
    </div>
  );
};

export default Lesson;
