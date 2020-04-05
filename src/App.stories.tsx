import * as React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";
import useAppNavigation from "./lib/useAppNavigation";

const TestHarness: React.FunctionComponent = () => {
  const {
    nav: { goToCourses },
  } = useAppNavigation();

  React.useEffect(() => goToCourses(), [goToCourses]);

  return <App />;
};

storiesOf("App", module).add("Basic", () => <TestHarness />);
