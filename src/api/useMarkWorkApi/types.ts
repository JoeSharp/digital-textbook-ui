import { IMongoDocument } from "../useDocumentApi/types";
import { IUserDoc } from "../useUserApi/types";
import { IWorkType, IWorkDoc } from "../useMyWorkApi/types";

export interface IStudentWorkDoc extends IMongoDocument {
  student: IUserDoc;
  work: IWorkDoc<any>;
}

export interface IStudentWorkSubmissionList {
  workType: IWorkType;
  workId: string;
  students: IUserDoc[];
}
