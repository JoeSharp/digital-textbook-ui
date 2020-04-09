import * as React from "react";
import { addDecorator } from "@storybook/react";
import { withRouter, RouteComponentProps } from "react-router";

import "../src/index.css";

import useMockServer from "../src/api/useMockServer";
import { AuthenticationContextProvider } from "../src/lib/authentication";
import { ErrorReportingContextProvider } from "../src/lib/ErrorPage";
import { CustomRouter } from "../src/lib/useAppNavigation";
import StoryRouter from "storybook-react-router";

const RouteWrapper: React.StatelessComponent<RouteComponentProps> = ({
  children,
  history,
}) => {
  return <CustomRouter history={history}>{children}</CustomRouter>;
};
const RouteWrapperReady = withRouter(RouteWrapper);

addDecorator((storyFn) => {
  const isMockServerReady = useMockServer();

  return isMockServerReady ? (
    <ErrorReportingContextProvider>
      <RouteWrapperReady>
        <AuthenticationContextProvider>
          {storyFn()}
        </AuthenticationContextProvider>
      </RouteWrapperReady>
    </ErrorReportingContextProvider>
  ) : (
    <div>waiting for mock server...</div>
  );
});

addDecorator(StoryRouter());
