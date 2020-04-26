import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { UseObjectReducer } from "../../lib/useObjectReducer/types";

export interface ClientSideData {
  courses: UseObjectReducer<ICourseDoc>;
  lessons: UseObjectReducer<ILessonDoc>;
  tasks: UseObjectReducer<ITaskDoc>;
  users: UseObjectReducer<IUserDoc>;
  primmChallenges: UseObjectReducer<IPrimmChallengeDoc>;
}
