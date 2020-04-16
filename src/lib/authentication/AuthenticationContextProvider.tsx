import React from "react";

import AuthenticationContext from "./AuthenticationContext";
import useUserApi from "../../api/useUserApi";

const AuthenticationContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const [idToken, setIdToken] = React.useState<string>();
  const { currentUser } = useUserApi();

  return (
    <AuthenticationContext.Provider
      value={{ idToken, currentUser, setIdToken }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
