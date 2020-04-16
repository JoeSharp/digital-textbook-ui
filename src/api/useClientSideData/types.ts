import { ICourseDoc, ILessonDoc, ITaskDoc, IUserDoc } from "../../types";
import { UseObjectReducer } from "../../lib/useObjectReducer/types";

export interface ClientSideData {
  courses: UseObjectReducer<ICourseDoc>;
  lessons: UseObjectReducer<ILessonDoc>;
  tasks: UseObjectReducer<ITaskDoc>;
  users: UseObjectReducer<IUserDoc>;
}
