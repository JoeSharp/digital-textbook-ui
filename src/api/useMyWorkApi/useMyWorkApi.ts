import React from "react";

import useApi from "./useApi";
import { IWork, WorkType } from "./types";
import useAutoSave from "../../lib/useAutoSave";

interface UseMyWorkApi<T> {
  work: IWork<T>;
  isDirty: boolean;
  isSaving: boolean;
  localSave: (w: Partial<T>) => void;
}

const useMyWorkApi = <T extends {}>(
  workType: WorkType,
  workId: string,
  defaultContent: T
): UseMyWorkApi<T> => {
  const { getMyWork, saveMyWork } = useApi<T>();
  const defaultWork = React.useMemo(
    () => ({ workId, workType, workContent: defaultContent }),
    [workType, workId, defaultContent]
  );

  const getInitialValue = React.useCallback(() => getMyWork(workType, workId), [
    workId,
    workType,
    getMyWork,
  ]);

  const { localData: work, isDirty, isSaving, localSave } = useAutoSave<
    IWork<T>
  >({
    defaultValue: defaultWork,
    getInitialValue,
    saveData: (w) => {
      return saveMyWork(WorkType.primmChallenge, workId, w);
    },
  });

  return { work, localSave, isDirty, isSaving };
};

export default useMyWorkApi;
