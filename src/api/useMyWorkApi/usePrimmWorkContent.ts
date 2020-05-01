import React from "react";

import { IQuestionResponses } from "../useQuestionApi/types";
import {
  IPrimmRunResponse,
  IPrimmRemixResponse,
  IPrimmWork,
  EMPTY_PRIMM_WORK,
} from "../usePrimmApi/types";
import useMyWorkApi, { UseMyWorkApi } from "./useMyWorkApi";
import { IWorkType } from "./types";
import { UseObjectReducer } from "../../lib/useObjectReducer/types";

interface UpdatePredict {
  type: "predict";
  value: Partial<IQuestionResponses>;
}
interface UpdateRun {
  type: "run";
  value: Partial<IPrimmRunResponse>;
}
interface UpdateInvestigate {
  type: "investigate";
  value: Partial<IQuestionResponses>;
}
interface UpdateModify {
  type: "modify";
  value: Partial<IPrimmRemixResponse>;
}
interface UpdateMake {
  type: "make";
  value: Partial<IPrimmRemixResponse>;
}

type Action =
  | UpdatePredict
  | UpdateRun
  | UpdateInvestigate
  | UpdateModify
  | UpdateMake;

const workContentReducer = (state: IPrimmWork, action: Action): IPrimmWork => {
  if (action.type === "predict") {
    return { ...state, predict: { ...state.predict, ...action.value } };
  } else if (action.type === "run") {
    return { ...state, run: { ...state.run, ...action.value } };
  } else if (action.type === "investigate") {
    return { ...state, investigate: { ...state.investigate, ...action.value } };
  } else if (action.type === "modify") {
    return { ...state, modify: { ...state.modify, ...action.value } };
  } else if (action.type === "make") {
    return { ...state, make: { ...state.make, ...action.value } };
  }

  return state;
};

interface UsePrimmWorkContent extends UseMyWorkApi<IPrimmWork, Action> {
  predictResponse: UseObjectReducer<IQuestionResponses>;
  runResponse: UseObjectReducer<IPrimmRunResponse>;
  investigateResponse: UseObjectReducer<IQuestionResponses>;
  modifyResponse: UseObjectReducer<IPrimmRemixResponse>;
  makeResponse: UseObjectReducer<IPrimmRemixResponse>;
}

const usePrimmWorkContent = (challengeId: string): UsePrimmWorkContent => {
  const myWorkApi = useMyWorkApi<IPrimmWork, Action>({
    workType: IWorkType.primmChallenge,
    workId: challengeId,
    defaultContent: EMPTY_PRIMM_WORK,
    reducer: workContentReducer,
  });

  const {
    dispatchUpdate,
    workContent: { predict, run, investigate, modify, make },
  } = myWorkApi;

  return {
    ...myWorkApi,
    predictResponse: {
      value: predict,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatchUpdate({ type: "predict", value }),
        [dispatchUpdate]
      ),
    },
    runResponse: {
      value: run,
      onChange: React.useCallback(
        (value: Partial<IPrimmRunResponse>) =>
          dispatchUpdate({ type: "run", value }),
        [dispatchUpdate]
      ),
    },
    investigateResponse: {
      value: investigate,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatchUpdate({ type: "investigate", value }),
        [dispatchUpdate]
      ),
    },
    modifyResponse: {
      value: modify,
      onChange: React.useCallback(
        (value: Partial<IPrimmRemixResponse>) =>
          dispatchUpdate({ type: "modify", value }),
        [dispatchUpdate]
      ),
    },
    makeResponse: {
      value: make,
      onChange: React.useCallback(
        (value: Partial<IPrimmRemixResponse>) =>
          dispatchUpdate({ type: "make", value }),
        [dispatchUpdate]
      ),
    },
  };
};
export default usePrimmWorkContent;
