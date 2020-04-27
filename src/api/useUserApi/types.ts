import { IMongoDocument } from "../useDocumentApi/types";

export interface IUser {
  emailAddress: string;
}

export type IUserDoc = IUser & IMongoDocument;
