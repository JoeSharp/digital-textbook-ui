import React from "react";

import { IStudentWorkDoc, IStudentWorkSubmissionList } from "./types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/studentWork`;

interface UseApi {
  getWorkSubmissionList: (
    workId: string
  ) => Promise<IStudentWorkSubmissionList>;
  getWorkForStudent: (
    workId: string,
    studentId: string
  ) => Promise<IStudentWorkDoc>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getWorkSubmissionList: React.useCallback(
      async (workId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(`${RESOURCE}/${workId}`, {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    getWorkForStudent: React.useCallback(
      async (workId: string, studentId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(`${RESOURCE}/${workId}/${studentId}`, {
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
