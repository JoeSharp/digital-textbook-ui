import React from "react";
import { ICourseDoc, IUserDoc, ILessonDoc, ITaskDoc } from "../types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { ClientSideData } from "./types";
import { getDefaultObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";

const ClientSideDataContext: React.Context<ClientSideData> = React.createContext(
  {
    courses: getDefaultObjectReducer<ICourseDoc>(),
    lessons: getDefaultObjectReducer<ILessonDoc>(),
    tasks: getDefaultObjectReducer<ITaskDoc>(),
    users: getDefaultObjectReducer<IUserDoc>(),
    primmChallenges: getDefaultObjectReducer<IPrimmChallengeDoc>(),
  }
);

export default ClientSideDataContext;
