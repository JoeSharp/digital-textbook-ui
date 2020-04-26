import React from "react";
import { getDocumentId } from "../types";
import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import useObjectReducer from "../../lib/useObjectReducer";

import { ClientSideData } from "./types";
import ClientSideDataContext from "./ClientSideDataContext";

const ClientSideDataProvider: React.FunctionComponent = ({ children }) => {
  const courses = useObjectReducer<ICourseDoc>(getDocumentId, {});
  const lessons = useObjectReducer<ILessonDoc>(getDocumentId, {});
  const tasks = useObjectReducer<ITaskDoc>(getDocumentId, {});
  const users = useObjectReducer<IUserDoc>(getDocumentId, {});
  const primmChallenges = useObjectReducer<IPrimmChallengeDoc>(
    getDocumentId,
    {}
  );

  const value: ClientSideData = {
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
