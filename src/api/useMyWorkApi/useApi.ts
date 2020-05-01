import React from "react";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";
import { IWorkType } from "./types";

const RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/myWork`;

interface UseMyWorkApi<T> {
  getMyWork: (workType: IWorkType, workId: string) => Promise<T>;
  saveMyWork: (
    workType: IWorkType,
    workId: string,
    workContent: T
  ) => Promise<T>;
}

const useApi = <T extends {}>(): UseMyWorkApi<T> => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getMyWork: React.useCallback(
      async (workType: IWorkType, workId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(`${RESOURCE}/${workType}/${workId}`, {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    saveMyWork: React.useCallback(
      async (workType: IWorkType, workId: string, workContent: T) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(`${RESOURCE}/${workType}/${workId}`, {
          method: "post",
          body: JSON.stringify(workContent),
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
