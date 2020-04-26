import { IMongoDocument } from "../types";

export interface IUser {
  emailAddress: string;
}

export type IUserDoc = IUser & IMongoDocument;
