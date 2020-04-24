import React from "react";
import { storiesOf } from "@storybook/react";
import PrimmChooser from "./PrimmChooser";

const TestHarness: React.FunctionComponent = () => {
  return <PrimmChooser />;
};

storiesOf("Student/PRIMM/Choose", module).add("basic", () => <TestHarness />);
