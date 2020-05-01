import React from "react";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";
import { IWorkDoc, IWork, WorkType } from "./types";

const RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/myWork`;

interface UseMyWorkApi {
  getMyWork: (workType: WorkType, workId: string) => Promise<IWorkDoc>;
  saveMyWork: (
    workType: WorkType,
    workId: string,
    work: IWork
  ) => Promise<IWorkDoc>;
}

interface UseMyWorkApi {}

const useMyWorkApi = (): UseMyWorkApi => {
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
      async (workType: WorkType, workId: string, work: IWork) => {
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

export default useMyWorkApi;
