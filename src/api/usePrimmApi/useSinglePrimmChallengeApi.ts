import React from "react";
import { IPrimmChallengeDoc, IPrimmChallenge } from "../../types";

import useApi from "./useApi";
import useClientSideData from "../useClientSideData";
import { useErrorReporting } from "../../lib/ErrorPage";

interface Props {
  challengeId: string;
}

interface UseSingleChallengeApi {
  challenge: IPrimmChallengeDoc | undefined;
  updateChallenge: (updates: IPrimmChallenge) => void;
  deleteChallenge: () => void;
}

const useSingleChallengeApi = ({
  challengeId,
}: Props): UseSingleChallengeApi => {
  const { reportError } = useErrorReporting();

  const { getChallenge, updateChallenge, deleteChallenge } = useApi();

  const {
    primmChallenges: { items, addItem, removeItem },
  } = useClientSideData();

  const challenge: IPrimmChallengeDoc | undefined = React.useMemo(
    () => items[challengeId],
    [challengeId, items]
  );

  React.useEffect(() => {
    async function f() {
      try {
        const challenge = await getChallenge(challengeId);
        addItem(challenge);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [challengeId, getChallenge, addItem, reportError]);

  const _updateChallenge = React.useCallback(
    (updates: IPrimmChallenge) => {
      async function f() {
        try {
          const updated = await updateChallenge(challengeId, updates);
          addItem(updated);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [challengeId, updateChallenge, addItem, reportError]
  );

  const _deleteChallenge = React.useCallback(() => {
    async function f() {
      try {
        await deleteChallenge(challengeId);
        removeItem(challengeId);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [challengeId, deleteChallenge, removeItem, reportError]);

  return {
    challenge,
    updateChallenge: _updateChallenge,
    deleteChallenge: _deleteChallenge,
  };
};

export default useSingleChallengeApi;
