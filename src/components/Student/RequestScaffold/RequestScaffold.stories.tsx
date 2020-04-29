import React from "react";
import { storiesOf } from "@storybook/react";
import RequestScaffold, { useRequestScaffold } from "./RequestScaffold";
import scaffoldedQuestions from "../../../testing/data/primm/scaffoldedQuestions";

const TestHarness: React.FunctionComponent = () => {
  const { componentProps } = useRequestScaffold({
    levelCaptions: React.useMemo(
      () => scaffoldedQuestions.map((s) => s.caption),
      []
    ),
  });

  return <RequestScaffold {...componentProps} />;
};

storiesOf("Student/Request Scaffold", module).add("basic", () => (
  <TestHarness />
));
