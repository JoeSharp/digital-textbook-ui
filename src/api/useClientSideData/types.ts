import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { UseObjectReducer } from "../../lib/useObjectReducer/types";
import { IWorkDoc } from "../useMyWorkApi/types";

export interface ClientSideData {
  myWork: UseObjectReducer<IWorkDoc>;
  courses: UseObjectReducer<ICourseDoc>;
  lessons: UseObjectReducer<ILessonDoc>;
  tasks: UseObjectReducer<ITaskDoc>;
  users: UseObjectReducer<IUserDoc>;
  primmChallenges: UseObjectReducer<IPrimmChallengeDoc>;
}
