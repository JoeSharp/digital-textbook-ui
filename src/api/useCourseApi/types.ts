import { IMongoDocument } from "../useDocumentApi/types";

export interface ICourse {
  name: string;
  description: string;
}

export type ICourseDoc = IMongoDocument & ICourse;
