import React from "react";

import AuthenticationContext from "./AuthenticationContext";

const AuthenticationContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const [idToken, setIdToken] = React.useState<string | undefined>(
    "REMOVE EVENTUALLY"
  );

  return (
    <AuthenticationContext.Provider value={{ idToken, setIdToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
