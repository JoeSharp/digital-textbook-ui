import React from "react";

import { IQuestionResponses } from "../useQuestionApi/types";
import {
  IPrimmRunResponse,
  IPrimmRemixResponse,
  IPrimmWork,
  EMPTY_PRIMM_WORK,
} from "../usePrimmApi/types";
import useMyWorkApi from ".";
import { WorkType } from "./types";
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

interface UsePrimmWorkContent {
  workContent: IPrimmWork;
  isDirty: boolean;
  isSaving: boolean;
  predictResponse: UseObjectReducer<IQuestionResponses>;
  runResponse: UseObjectReducer<IPrimmRunResponse>;
  investigateResponse: UseObjectReducer<IQuestionResponses>;
  modifyResponse: UseObjectReducer<IPrimmRemixResponse>;
  makeResponse: UseObjectReducer<IPrimmRemixResponse>;
}

const usePrimmWorkContent = (challengeId: string): UsePrimmWorkContent => {
  const { work, isDirty, isSaving, localSave } = useMyWorkApi<IPrimmWork>(
    WorkType.primmChallenge,
    challengeId,
    EMPTY_PRIMM_WORK
  );

  const [workContent, dispatch] = React.useReducer(
    workContentReducer,
    work.workContent
  );

  React.useEffect(() => localSave(workContent), [workContent, localSave]);

  return {
    workContent,
    isDirty,
    isSaving,
    predictResponse: {
      value: workContent.predict,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatch({ type: "predict", value }),
        []
      ),
    },
    runResponse: {
      value: workContent.run,
      onChange: React.useCallback(
        (value: Partial<IPrimmRunResponse>) => dispatch({ type: "run", value }),
        []
      ),
    },
    investigateResponse: {
      value: workContent.investigate,
      onChange: React.useCallback(
        (value: Partial<IQuestionResponses>) =>
          dispatch({ type: "investigate", value }),
        []
      ),
    },
    modifyResponse: {
      value: workContent.modify,
      onChange: React.useCallback(
        (value: Partial<IPrimmRemixResponse>) =>
          dispatch({ type: "modify", value }),
        []
      ),
    },
    makeResponse: {
      value: workContent.make,
      onChange: React.useCallback(
        (value: Partial<IPrimmRemixResponse>) =>
          dispatch({ type: "make", value }),
        []
      ),
    },
  };
};
export default usePrimmWorkContent;
