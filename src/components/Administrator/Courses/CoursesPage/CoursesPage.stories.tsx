import * as React from "react";
import { storiesOf } from "@storybook/react";
import CoursesPage from "./CoursesPage";

storiesOf("Administrator/Courses/Main Page", module).add("Basic", () => (
  <CoursesPage />
));
