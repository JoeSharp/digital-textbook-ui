import React from "react";
import {
  ICourseDoc,
  getDocumentId,
  IUserDoc,
  ILessonDoc,
  ITaskDoc,
} from "../../types";
import useObjectReducer from "../../lib/useObjectReducer/useObjectReducer";

import { ClientSideData } from "./types";
import ClientSideDataContext from "./ClientSideDataContext";

const ClientSideDataProvider: React.FunctionComponent = ({ children }) => {
  const courses = useObjectReducer<ICourseDoc>(getDocumentId, {});
  const lessons = useObjectReducer<ILessonDoc>(getDocumentId, {});
  const tasks = useObjectReducer<ITaskDoc>(getDocumentId, {});
  const users = useObjectReducer<IUserDoc>(getDocumentId, {});

  const value: ClientSideData = { courses, lessons, tasks, users };

  return (
    <ClientSideDataContext.Provider value={value}>
      {children}
    </ClientSideDataContext.Provider>
  );
};

export { ClientSideDataProvider };

const useClientSideData = () => React.useContext(ClientSideDataContext);

export default useClientSideData;
