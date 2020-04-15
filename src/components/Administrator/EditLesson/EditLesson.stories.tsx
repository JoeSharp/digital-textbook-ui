import React from "react";
import { storiesOf } from "@storybook/react";

import { courses, lessons } from "../../../testing/data";

import EditLesson from "./EditLesson";

courses.forEach((course) => {
  const stories = storiesOf(
    `Administrator/Edit Lesson/For Course/${course.name}`,
    module
  );

  lessons
    .filter((l) => l.courseId === course._id)
    .forEach((l) =>
      stories.add(l.title, () => <EditLesson lessonId={l._id} />)
    );
});
