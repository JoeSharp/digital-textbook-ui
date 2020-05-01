import React from "react";

import useApi from "./useApi";
import { IWorkType } from "./types";
import useInterval from "../../lib/useInterval";

interface WorkAction {
  type: string;
}

interface WorkSaving<WORK_CONTENT> {
  isDirty: boolean;
  isSaving: boolean;
  workContent: WORK_CONTENT;
}

interface Props<WORK_CONTENT, ACTION extends WorkAction> {
  workType: IWorkType;
  workId: string;
  defaultContent: WORK_CONTENT;
  reducer: React.Reducer<WORK_CONTENT, ACTION>;
}

export interface UseMyWorkApi<WORK_CONTENT, ACTION extends WorkAction> {
  workContent: WORK_CONTENT;
  isDirty: boolean;
  isSaving: boolean;
  dispatchUpdate: React.Dispatch<ACTION>;
}

interface InitialLoadAction<WORK_CONTENT> {
  type: "initialLoad";
  value: WORK_CONTENT;
}
interface StartSaveAction {
  type: "startSave";
}
interface SaveCompleteAction {
  type: "saveComplete";
}
type SavingAction<WORK_CONTENT> =
  | InitialLoadAction<WORK_CONTENT>
  | StartSaveAction
  | SaveCompleteAction;

const workSavingReducer = <WORK_CONTENT, ACTION extends WorkAction>(
  reducer: React.Reducer<WORK_CONTENT, ACTION>
): React.Reducer<
  WorkSaving<WORK_CONTENT>,
  SavingAction<WORK_CONTENT> | ACTION
> => {
  return (
    state: WorkSaving<WORK_CONTENT>,
    action: SavingAction<WORK_CONTENT> | ACTION
  ): WorkSaving<WORK_CONTENT> => {
    if (action.type === "initialLoad") {
      return {
        isDirty: false,
        isSaving: false,
        workContent: (action as InitialLoadAction<WORK_CONTENT>).value,
      };
    } else if (action.type === "startSave") {
      return { ...state, isSaving: true };
    } else if (action.type === "saveComplete") {
      return { ...state, isSaving: false, isDirty: false };
    } else {
      return {
        ...state,
        isDirty: true,
        workContent: reducer(state.workContent, action as ACTION),
      };
    }
  };
};

const useMyWorkApi = <WORK_CONTENT, ACTION extends WorkAction>({
  workType,
  workId,
  defaultContent,
  reducer,
}: Props<WORK_CONTENT, ACTION>): UseMyWorkApi<WORK_CONTENT, ACTION> => {
  const [workState, dispatchUpdate] = React.useReducer(
    workSavingReducer(reducer),
    {
      isSaving: false,
      isDirty: false,
      workContent: defaultContent,
    }
  );
  const { workContent, isSaving, isDirty } = workState;

  const { getMyWork, saveMyWork } = useApi<WORK_CONTENT>();

  React.useEffect(() => {
    async function f() {
      const value = await getMyWork(workType, workId);
      dispatchUpdate({ type: "initialLoad", value });
    }

    f();
  }, [workType, workId, getMyWork, dispatchUpdate]);

  useInterval({
    callback: React.useCallback(() => {
      async function f() {
        dispatchUpdate({ type: "startSave" });
        await saveMyWork(workType, workId, workContent);
        dispatchUpdate({ type: "saveComplete" });
      }
      f();
    }, [workType, workId, workContent, saveMyWork]),
    delay: isDirty ? 3000 : null,
  });

  return { workContent, dispatchUpdate, isDirty, isSaving };
};

export default useMyWorkApi;
