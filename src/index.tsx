import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthenticationContextProvider } from "./lib/authentication";
import { ErrorReportingContextProvider } from "./lib/ErrorPage";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory as createHistory } from "history";
import { CustomRouter } from "./lib/useAppNavigation";

export const history = createHistory();

ReactDOM.render(
  <ErrorReportingContextProvider>
    <AuthenticationContextProvider>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </AuthenticationContextProvider>
  </ErrorReportingContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
