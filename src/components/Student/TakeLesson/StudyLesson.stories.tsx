import * as React from "react";
import { storiesOf } from "@storybook/react";

import Lesson from "./StudyLesson";

storiesOf("Student/Study Lesson", module).add("Basic", () => (
  <Lesson lessonId="1234" />
));
