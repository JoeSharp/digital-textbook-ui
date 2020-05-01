import { IMongoDocument } from "../useDocumentApi/types";
import { IUserDoc } from "../useUserApi/types";
import { WorkType, IWorkDoc } from "../useMyWorkApi/types";

export interface IStudentWorkDoc extends IMongoDocument {
  student: IUserDoc;
  work: IWorkDoc;
}

export interface IStudentWorkSubmissionList {
  workType: WorkType;
  workId: string;
  students: IUserDoc[];
}
