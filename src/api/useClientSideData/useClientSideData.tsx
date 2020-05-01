import React from "react";
import { getDocumentId } from "../useDocumentApi/types";
import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import useListReducer from "../../lib/useListReducer";

import { ClientSideData } from "./types";
import ClientSideDataContext from "./ClientSideDataContext";
import { IWorkDoc } from "../useMyWorkApi/types";

const ClientSideDataProvider: React.FunctionComponent = ({ children }) => {
  const myWork = useListReducer<IWorkDoc>((m) => m.workId, {});
  const courses = useListReducer<ICourseDoc>(getDocumentId, {});
  const lessons = useListReducer<ILessonDoc>(getDocumentId, {});
  const tasks = useListReducer<ITaskDoc>(getDocumentId, {});
  const users = useListReducer<IUserDoc>(getDocumentId, {});
  const primmChallenges = useListReducer<IPrimmChallengeDoc>(getDocumentId, {});

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
