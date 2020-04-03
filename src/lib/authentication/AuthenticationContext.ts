import * as React from "./node_modules/react";

interface AuthenticationContextApi {
  idToken?: string;
  setIdToken: (idToken: string) => void;
}

const defaultIdToken: string | undefined = undefined;

const defaultContext: AuthenticationContextApi = {
  idToken: defaultIdToken,
  setIdToken: (idToken: string) => {
    console.error("Default Implementation for Authentication Context", idToken);
  },
};

const AuthenticationContext: React.Context<
  AuthenticationContextApi
> = React.createContext(defaultContext);

export default AuthenticationContext;
