import React from "react";
import { IPrimmChallengeDoc, IPrimmChallenge } from "./types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const PRIMM_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/primm`;

const getResourceWithChallengeId = (challengeId: string) =>
  `${PRIMM_RESOURCE}/${challengeId}`;

interface UseApi {
  getChallenges: () => Promise<IPrimmChallengeDoc[]>;
  getChallenge: (challengeId: string) => Promise<IPrimmChallengeDoc>;
  createChallenge: (
    newPrimmChallengeDetails: IPrimmChallenge
  ) => Promise<IPrimmChallengeDoc>;
  updateChallenge: (
    challengeId: string,
    updates: IPrimmChallenge
  ) => Promise<IPrimmChallengeDoc>;
  deleteChallenge: (challengeId: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getChallenges: React.useCallback(() => {
      let headers = {
        Accept: "application/json",
        Authorization: `Bearer ${idToken}`,
      };
      return fetch(PRIMM_RESOURCE, {
        headers,
      })
        .then(handle200)
        .then((r) => r.json());
    }, [idToken, handle200]),
    getChallenge: React.useCallback(
      async (challengeId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithChallengeId(challengeId), {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    createChallenge: React.useCallback(
      async (newPrimmChallenge: IPrimmChallenge) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(PRIMM_RESOURCE, {
          method: "post",
          body: JSON.stringify(newPrimmChallenge),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    updateChallenge: React.useCallback(
      async (challengeId: string, updates: IPrimmChallenge) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithChallengeId(challengeId), {
          method: "put",
          body: JSON.stringify(updates),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    deleteChallenge: React.useCallback(
      async (challengeId: string) => {
        let headers = {
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithChallengeId(challengeId), {
          method: "delete",
          headers,
        });
        return await handle200(response);
      },
      [idToken, handle200]
    ),
  };
};

export default useApi;
