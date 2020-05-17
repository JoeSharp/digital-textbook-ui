import React from "react";

import {
  IQuestionResponses,
  EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
} from "../useQuestionApi/types";
import {
  IPrimmRunResponse,
  IPrimmRemixResponse,
  IPrimmWork,
  EMPTY_PRIMM_WORK,
  EMPTY_RUN_RESPONSE,
  EMPTY_URL_REMIX,
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
  predictResponseControlProps: UseObjectReducer<IQuestionResponses>;
  runResponseControlProps: UseObjectReducer<IPrimmRunResponse>;
  investigateResponseControlProps: UseObjectReducer<IQuestionResponses>;
  modifyResponseControlProps: UseObjectReducer<IPrimmRemixResponse>;
  makeResponseControlProps: UseObjectReducer<IPrimmRemixResponse>;
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
    workContent: {
      predict = EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
      run = EMPTY_RUN_RESPONSE,
      investigate = EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
      modify = EMPTY_URL_REMIX,
      make = EMPTY_URL_REMIX,
    },
  } = myWorkApi;

  return {
    ...myWorkApi,
    predictResponseControlProps: {
      value: predict,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatchUpdate({ type: "predict", value }),
        [dispatchUpdate]
      ),
    },
    runResponseControlProps: {
      value: run,
      onChange: React.useCallback(
        (value: Partial<IPrimmRunResponse>) =>
          dispatchUpdate({ type: "run", value }),
        [dispatchUpdate]
      ),
    },
    investigateResponseControlProps: {
      value: investigate,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatchUpdate({ type: "investigate", value }),
        [dispatchUpdate]
      ),
    },
    modifyResponseControlProps: {
      value: modify,
      onChange: React.useCallback(
        (value: Partial<IPrimmRemixResponse>) =>
          dispatchUpdate({ type: "modify", value }),
        [dispatchUpdate]
      ),
    },
    makeResponseControlProps: {
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
