import React from "react";
import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { ClientSideData } from "./types";
import { getDefaultObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";
import { IWorkDoc } from "../useMyWorkApi/types";

const ClientSideDataContext: React.Context<ClientSideData> = React.createContext(
  {
    myWork: getDefaultObjectReducer<IWorkDoc>(),
    courses: getDefaultObjectReducer<ICourseDoc>(),
    lessons: getDefaultObjectReducer<ILessonDoc>(),
    tasks: getDefaultObjectReducer<ITaskDoc>(),
    users: getDefaultObjectReducer<IUserDoc>(),
    primmChallenges: getDefaultObjectReducer<IPrimmChallengeDoc>(),
  }
);

export default ClientSideDataContext;
