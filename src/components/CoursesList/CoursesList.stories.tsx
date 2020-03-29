import * as React from "react";
import { storiesOf } from "@storybook/react";
import CoursesList from "./CoursesList";

storiesOf("Courses List", module).add("Basic", () => <CoursesList />);
