import * as React from "react";
import { addDecorator } from "@storybook/react";

import useMockServer from "../src/lib/api/useMockServer";
import { AuthenticationContextProvider } from "../src/lib/authentication";
import { ErrorReportingContextProvider } from "../src/lib/ErrorPage";

addDecorator(storyFn => {
  const isMockServerReady = useMockServer();

  return isMockServerReady ? (
    <ErrorReportingContextProvider>
      <AuthenticationContextProvider>{storyFn()}</AuthenticationContextProvider>
    </ErrorReportingContextProvider>
  ) : (
    <div>waiting for mock server...</div>
  );
});
