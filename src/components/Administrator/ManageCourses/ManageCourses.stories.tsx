import * as React from "react";
import { storiesOf } from "@storybook/react";
import ManageCourses from "./ManageCourses";

storiesOf("Administrator/ManageCourses", module).add("Basic", () => (
  <ManageCourses />
));
