import { IMongoDocument } from "../useDocumentApi/types";

export interface ILesson {
  courseId: string;
  title: string;
  description: string;
}

export type ILessonDoc = IMongoDocument & ILesson;
