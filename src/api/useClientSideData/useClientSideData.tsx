import React from "react";
import { getDocumentId } from "../useDocumentApi/types";
import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import useObjectReducer from "../../lib/useObjectReducer";

import { ClientSideData } from "./types";
import ClientSideDataContext from "./ClientSideDataContext";
import { IWorkDoc } from "../useMyWorkApi/types";

const ClientSideDataProvider: React.FunctionComponent = ({ children }) => {
  const myWork = useObjectReducer<IWorkDoc>((m) => m.workId, {});
  const courses = useObjectReducer<ICourseDoc>(getDocumentId, {});
  const lessons = useObjectReducer<ILessonDoc>(getDocumentId, {});
  const tasks = useObjectReducer<ITaskDoc>(getDocumentId, {});
  const users = useObjectReducer<IUserDoc>(getDocumentId, {});
  const primmChallenges = useObjectReducer<IPrimmChallengeDoc>(
    getDocumentId,
    {}
  );

  const value: ClientSideData = {
    myWork,
    courses,
    lessons,
    tasks,
    users,
    primmChallenges,
  };

  return (
    <ClientSideDataContext.Provider value={value}>
      {children}
    </ClientSideDataContext.Provider>
  );
};

export { ClientSideDataProvider };

const useClientSideData = () => React.useContext(ClientSideDataContext);

export default useClientSideData;
