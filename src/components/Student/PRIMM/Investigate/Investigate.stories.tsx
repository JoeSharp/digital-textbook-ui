import React from "react";
import { storiesOf } from "@storybook/react";
import Investigate from "./Investigate";

const TestHarness: React.FunctionComponent = () => {
  return <Investigate />;
};

storiesOf("Student/PRIMM/Investigate", module).add("basic", () => (
  <TestHarness />
));
