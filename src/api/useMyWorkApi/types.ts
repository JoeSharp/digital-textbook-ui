import { IMongoDocument } from "../useDocumentApi/types";

export enum IWorkType {
  primmChallenge = "primmChallenge",
  courseTask = "courseTask",
}

export interface IWork<T> {
  workType: IWorkType;
  workId: string;
  workContent: T;
}

export type IWorkDoc<T> = IMongoDocument & IWork<T>;
