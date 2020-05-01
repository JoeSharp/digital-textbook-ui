import React from "react";
import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { ClientSideData } from "./types";
import { getDefaultListReducer } from "../../lib/useListReducer/useListReducer";

const ClientSideDataContext: React.Context<ClientSideData> = React.createContext(
  {
    courses: getDefaultListReducer<ICourseDoc>(),
    lessons: getDefaultListReducer<ILessonDoc>(),
    tasks: getDefaultListReducer<ITaskDoc>(),
    users: getDefaultListReducer<IUserDoc>(),
    primmChallenges: getDefaultListReducer<IPrimmChallengeDoc>(),
  }
);

export default ClientSideDataContext;
