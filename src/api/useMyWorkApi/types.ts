import { IMongoDocument } from "../useDocumentApi/types";

export enum WorkType {
  primmChallenge = "primmChallenge",
  courseTask = "courseTask",
}

export interface IWork {
  workType: WorkType;
  workId: string;
  workContent: object;
}

export type IWorkDoc = IMongoDocument & IWork;
