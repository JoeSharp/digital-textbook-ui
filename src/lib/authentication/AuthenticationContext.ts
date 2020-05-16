import React from "react";
import { IUserDoc } from "../../api/useUserApi/types";

interface AuthenticationContextApi {
  login: (idToken: string) => void;
  idToken?: string;
  currentUser?: IUserDoc;
}

const defaultContext: AuthenticationContextApi = {
  login: (idToken: string) => {
    console.error("Default Implementation for Authentication Context");
  },
};

const AuthenticationContext: React.Context<AuthenticationContextApi> = React.createContext(
  defaultContext
);

export default AuthenticationContext;
