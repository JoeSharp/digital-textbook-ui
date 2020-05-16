import React from "react";

import AuthenticationContext from "./AuthenticationContext";
import { IUserDoc } from "../../api/useUserApi/types";
import { useLogin } from "../../api/useUserApi/useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";

const AuthenticationContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const { reportError } = useErrorReporting();
  const { login: apiLogin } = useLogin();

  const [idToken, setIdToken] = React.useState<string>();
  const [currentUser, setCurrentUser] = React.useState<IUserDoc>();

  const login = React.useCallback(
    (_idToken: string) => {
      async function f() {
        try {
          const _currentUser = await apiLogin(_idToken);
          setCurrentUser(_currentUser);
          setIdToken(_idToken);
        } catch (e) {
          reportError(e);
        }
      }

      f();
    },
    [setCurrentUser, setIdToken, reportError, apiLogin]
  );

  return (
    <AuthenticationContext.Provider value={{ idToken, login, currentUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
