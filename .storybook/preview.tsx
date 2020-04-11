import * as React from "react";
import { addDecorator } from "@storybook/react";
import { withRouter, RouteComponentProps } from "react-router";
import Modal from "react-modal";

import "../src/index.css";

import useMockServer from "../src/api/useMockServer";
import { ClientSideDataProvider } from "../src/api/useClientSideData/useClientSideData";
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

Modal.setAppElement("#root");

addDecorator((storyFn) => {
  const isMockServerReady = useMockServer();

  return isMockServerReady ? (
    <ErrorReportingContextProvider>
      <ClientSideDataProvider>
        <RouteWrapperReady>
          <AuthenticationContextProvider>
            {storyFn()}
          </AuthenticationContextProvider>
        </RouteWrapperReady>
      </ClientSideDataProvider>
    </ErrorReportingContextProvider>
  ) : (
    <div>waiting for mock server...</div>
  );
});

addDecorator(StoryRouter());
