import { ICourseDoc } from "../../types";
import { UseObjectReducer } from "../../lib/useObjectReducer/useObjectReducer";

export interface ClientSideData {
  courses: UseObjectReducer<ICourseDoc>;
}
