import React from "react";
import { IPrimmChallengeDoc, IPrimmChallenge } from "./types";
import useClientSideData from "../useClientSideData";
import { useErrorReporting } from "../../components/App/ErrorPage";
import { ObjWithStringKey } from "../../lib/useObjectReducer/types";
import useApi from "./useApi";

interface UsePrimmApi {
  getChallenge: (challengeId: string) => void;
  refreshChallenges: () => void;
  createChallenge: (challenge: IPrimmChallenge) => void;
  updateChallenge: (challengeId: string, updates: IPrimmChallenge) => void;
  deleteChallenge: (challengeId: string) => void;
  challenges: IPrimmChallengeDoc[];
  challengesById: ObjWithStringKey<IPrimmChallengeDoc>;
}

const usePrimmApi = (): UsePrimmApi => {
  const { reportError } = useErrorReporting();
  const {
    primmChallenges: {
      items: challengesById,
      itemsInList: challengesInList,
      addItem,
      receiveListOfItems,
      removeItem,
    },
  } = useClientSideData();

  const {
    getChallenges,
    getChallenge,
    createChallenge,
    updateChallenge,
    deleteChallenge,
  } = useApi();

  const _refreshChallenges = React.useCallback(() => {
    async function f() {
      try {
        const challenges = await getChallenges();
        receiveListOfItems(challenges);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [receiveListOfItems, getChallenges, reportError]);

  React.useEffect(_refreshChallenges, [_refreshChallenges]);

  const _getChallenge = React.useCallback(
    (challengeId: string) => {
      async function f() {
        try {
          const challenge = await getChallenge(challengeId);
          addItem(challenge);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getChallenge, addItem, reportError]
  );

  const _createChallenge = React.useCallback(
    (challenge: IPrimmChallenge) => {
      async function f() {
        try {
          const newChallenge = await createChallenge(challenge);
          addItem(newChallenge);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [addItem, createChallenge, reportError]
  );

  const _updateChallenge = React.useCallback(
    (challengeId: string, updates: IPrimmChallenge) => {
      async function f() {
        try {
          console.log("updating challenge", updates);
          const updatedChallenge = await updateChallenge(challengeId, updates);
          console.log("UPDATED", updatedChallenge);
          addItem(updatedChallenge);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [addItem, updateChallenge, reportError]
  );

  const _deleteChallenge = React.useCallback(
    (challengeId: string) => {
      async function f() {
        try {
          await deleteChallenge(challengeId);
          removeItem(challengeId);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [removeItem, deleteChallenge, reportError]
  );

  return {
    challenges: challengesInList,
    challengesById,
    refreshChallenges: _refreshChallenges,
    getChallenge: _getChallenge,
    createChallenge: _createChallenge,
    updateChallenge: _updateChallenge,
    deleteChallenge: _deleteChallenge,
  };
};

export default usePrimmApi;
