import { IMongoDocument } from "../useDocumentApi/types";

export enum WorkType {
  primmChallenge = "primmChallenge",
  courseTask = "courseTask",
}

export interface IWork<T> {
  workType: WorkType;
  workId: string;
  workContent: T;
}

export type IWorkDoc<T> = IMongoDocument & IWork<T>;
