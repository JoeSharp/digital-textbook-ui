import React from "react";
import { storiesOf } from "@storybook/react";
import CoursesTable from "./CoursesTable";

storiesOf("Administrator/ManageCourses/Courses Table", module).add(
  "Basic",
  () => <CoursesTable />
);
