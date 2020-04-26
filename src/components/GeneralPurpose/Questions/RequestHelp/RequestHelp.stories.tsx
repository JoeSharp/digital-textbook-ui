import React from "react";
import { storiesOf } from "@storybook/react";
import RequestHelp, { useRequestHelp } from "./RequestHelp";
import questionSets from "../../../../testing/data/primm/questionSets";

const TestHarness: React.FunctionComponent = () => {
  const { componentProps } = useRequestHelp({
    questionSets,
  });

  return <RequestHelp {...componentProps} />;
};

storiesOf("General Purpose/Questions/Request Help", module).add("basic", () => (
  <TestHarness />
));
