import React from "react";

import useApi from "./useApi";
import { IWorkDoc, IWork, WorkType } from "./types";
import useErrorReporting from "../../lib/useErrorReporting";
import useClientSideData from "../useClientSideData";

interface UseMyWorkApi {
  work: IWorkDoc;
  saveWork: (updates: IWork) => void;
}

const useMyWorkApi = (workType: WorkType, workId: string): UseMyWorkApi => {
  const { reportError } = useErrorReporting();
  const { getMyWork, saveMyWork } = useApi();
  const defaultWork = React.useMemo(
    () => ({ workId, workType, workContent: {} }),
    [workType, workId]
  );

  const {
    myWork: { addItem, items },
  } = useClientSideData();

  const _refreshWork = React.useCallback(() => {
    async function f() {
      try {
        const w: IWorkDoc = await getMyWork(workType, workId);
        addItem(w);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [workType, workId, getMyWork, addItem, reportError]);

  React.useEffect(_refreshWork, [_refreshWork]);

  const _saveWork = React.useCallback(
    (updates: IWork) => {
      async function f() {
        try {
          const w = await saveMyWork(workType, workId, updates);
          addItem(w);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [workType, workId, addItem, saveMyWork, reportError]
  );

  return { work: items[workId] || defaultWork, saveWork: _saveWork };
};

export default useMyWorkApi;
