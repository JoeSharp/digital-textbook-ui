import React from "react";
import { ICourseDoc, ILessonDoc, ITaskDoc } from "../../types";
import { ClientSideData } from "./types";
import { getDefaultObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";

const ClientSideDataContext: React.Context<ClientSideData> = React.createContext(
  {
    courses: getDefaultObjectReducer<ICourseDoc>(),
    lessons: getDefaultObjectReducer<ILessonDoc>(),
    tasks: getDefaultObjectReducer<ITaskDoc>(),
  }
);

export default ClientSideDataContext;
