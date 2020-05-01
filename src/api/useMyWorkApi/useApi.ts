import React from "react";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";
import { IWorkDoc, IWork, WorkType } from "./types";

const RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/myWork`;

interface UseMyWorkApi<T> {
  getMyWork: (workType: WorkType, workId: string) => Promise<IWorkDoc<T>>;
  saveMyWork: (
    workType: WorkType,
    workId: string,
    work: IWork<T>
  ) => Promise<IWorkDoc<T>>;
}

const useApi = <T extends {}>(): UseMyWorkApi<T> => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getMyWork: React.useCallback(
      async (workType: WorkType, workId: string) => {
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
      async (workType: WorkType, workId: string, work: IWork<T>) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(`${RESOURCE}/${workType}/${workId}`, {
          method: "post",
          body: JSON.stringify(work),
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
