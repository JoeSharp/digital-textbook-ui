import * as React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";
import useAppNavigation from "../../lib/useAppNavigation";

const TestHarness: React.FunctionComponent = () => {
  const {
    nav: { goToCourses },
  } = useAppNavigation();

  React.useEffect(() => goToCourses(), [goToCourses]);

  return <App />;
};

storiesOf("App/Main", module).add("Basic", () => <TestHarness />);
