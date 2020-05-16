import React from "react";
import { IUserDoc } from "./types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const USER_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/user`;

const LOGIN_RESOURCE = `${USER_RESOURCE}/me/login`;
const getResourceWithUserId = (userId: string) => `${USER_RESOURCE}/${userId}`;

interface UseApi {
  getUser: (userId: string) => Promise<IUserDoc>;
}

interface UseLogin {
  login: (idToken: string) => Promise<IUserDoc>;
}

export const useLogin = (): UseLogin => {
  const handle200 = useCheckHttpStatus(200);

  return {
    login: React.useCallback(
      async (idToken: string) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(LOGIN_RESOURCE, {
          method: "get",
          headers,
        });
        const r = await handle200(response);
        return r.json() as IUserDoc;
      },
      [handle200]
    ),
  };
};

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getUser: React.useCallback(
      async (userId: string) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithUserId(userId), {
          method: "get",
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
  };
};

export default useApi;
