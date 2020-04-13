import * as React from "react";
import { storiesOf } from "@storybook/react";

import AdminLesson from "./AdminLesson";

const TestHarness: React.FunctionComponent = () => {
  return <AdminLesson />;
};

storiesOf("Admin/Lesson", module).add("basic", () => <TestHarness />);
