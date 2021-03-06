import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { AuthenticationContextProvider } from "./lib/authentication";
import { ErrorReportingContextProvider } from "./components/App/ErrorPage";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory as createHistory } from "history";
import { CustomRouter } from "./lib/useAppNavigation";
import Modal from "react-modal";

import "./index.css";
import { ClientSideDataProvider } from "./api/useClientSideData/useClientSideData";

export const history = createHistory();

Modal.setAppElement("#root");

ReactDOM.render(
  <ErrorReportingContextProvider>
    <ClientSideDataProvider>
      <AuthenticationContextProvider>
        <CustomRouter history={history}>
          <App />
        </CustomRouter>
      </AuthenticationContextProvider>
    </ClientSideDataProvider>
  </ErrorReportingContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
