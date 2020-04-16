import React from "react";
import { IUserDoc } from "../../types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const USER_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/user`;

interface UseApi {
  getCurrentUser: () => Promise<IUserDoc>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getCurrentUser: React.useCallback(async () => {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      };
      const response = await fetch(USER_RESOURCE, {
        method: "get",
        headers,
      });
      const r = await handle200(response);
      return r.json();
    }, [idToken, handle200]),
  };
};

export default useApi;
