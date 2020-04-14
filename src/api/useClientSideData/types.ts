import { ICourseDoc, ILessonDoc, ITaskDoc } from "../../types";
import { UseObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";

export interface ClientSideData {
  courses: UseObjectReducer<ICourseDoc>;
  lessons: UseObjectReducer<ILessonDoc>;
  tasks: UseObjectReducer<ITaskDoc>;
}
