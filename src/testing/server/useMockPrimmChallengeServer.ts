import React from "react";
import fetchMock from "fetch-mock";

import { primmChallenges as initialPrimmChallengeList } from "../data";
import {
  IPrimmChallengeDoc,
  IPrimmChallenge,
} from "../../api/usePrimmApi/types";
import { MockServer, getId } from "./mockServerUtils";
import { createDocument } from "../data/testDataUtils";
import useListReducer from "../../lib/useListReducer";

const initialPrimmChallenges = initialPrimmChallengeList.reduce(
  (acc, curr) => ({ ...acc, [curr._id]: curr }),
  {}
);

const resource = "/primm";
const resourceUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}${resource}`;
const resourceUrlWithId = `express:${resource}/:id`;

export const useMockServer = (): MockServer => {
  const {
    items: challengesById,
    itemsInList: challenges,
    addItem,
    removeItem,
  } = useListReducer<IPrimmChallengeDoc>((c) => c._id, initialPrimmChallenges);

  const setup = React.useCallback(() => {
    fetchMock.get(resourceUrl, challenges);
    fetchMock.get(resourceUrlWithId, (url) => {
      const id = getId(resource, url);
      const challenge = challengesById[id];
      if (!!challenge) {
        return challenge;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceUrl, (url, options) => {
      const challengeBody = JSON.parse(
        options.body as string
      ) as IPrimmChallenge;
      const challenge: IPrimmChallengeDoc = createDocument(challengeBody);
      addItem(challenge);

      return challenge;
    });
    fetchMock.put(resourceUrlWithId, (url, options) => {
      const _id = getId(resource, url);
      const challengeBody = JSON.parse(
        options.body as string
      ) as IPrimmChallenge;
      const challenge: IPrimmChallengeDoc = {
        _id,
        ...challengeBody,
      };
      addItem(challenge);
      return challenge;
    });
    fetchMock.delete(resourceUrlWithId, (url) => {
      const id = getId(resource, url);
      const removed = challengesById[id];
      removeItem(id);
      return removed;
    });
  }, [challenges, challengesById, addItem, removeItem]);

  return { setup, data: challenges };
};
