import { ICourseDoc } from "../useCourseApi/types";
import { IUserDoc } from "../useUserApi/types";
import { ITaskDoc } from "../useTaskApi/types";
import { ILessonDoc } from "../useLessonApi/types";
import { IPrimmChallengeDoc } from "../usePrimmApi/types";
import { UseListReducer } from "../../lib/useListReducer/types";

export interface ClientSideData {
  courses: UseListReducer<ICourseDoc>;
  lessons: UseListReducer<ILessonDoc>;
  tasks: UseListReducer<ITaskDoc>;
  users: UseListReducer<IUserDoc>;
  primmChallenges: UseListReducer<IPrimmChallengeDoc>;
}
