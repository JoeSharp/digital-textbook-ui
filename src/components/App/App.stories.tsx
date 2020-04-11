import * as React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";
import useAppNavigation from "../../lib/useAppNavigation";

const TestHarness: React.FunctionComponent = () => {
  const {
    nav: { goToAdminCourses },
  } = useAppNavigation();

  React.useEffect(() => goToAdminCourses(), [goToAdminCourses]);

  return <App />;
};

storiesOf("App/Main", module).add("Basic", () => <TestHarness />);
