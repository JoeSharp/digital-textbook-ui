import React from "react";
import { IUserDoc } from "../../api/types";

interface AuthenticationContextApi {
  idToken?: string;
  currentUser?: IUserDoc;
  setIdToken: (idToken: string) => void;
}

const defaultIdToken: string | undefined = undefined;

const defaultContext: AuthenticationContextApi = {
  idToken: defaultIdToken,
  setIdToken: (idToken: string) => {
    console.error("Default Implementation for Authentication Context", idToken);
  },
};

const AuthenticationContext: React.Context<AuthenticationContextApi> = React.createContext(
  defaultContext
);

export default AuthenticationContext;
