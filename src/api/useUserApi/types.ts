import { IMongoDocument } from "../useDocumentApi/types";

export enum IUserProfile {
  student = "student",
  teacher = "teacher",
  administrator = "administrator",
}

export enum IApplicationRoles {
  viewContent = "VIEW_CONTENT",
  study = "STUDY",
  editResources = "EDIT_COURSES",
  editUsers = "EDIT_USERS",
}

export interface IUser {
  profile: IUserProfile;
  emailAddress: string;
  authorisations: IApplicationRoles[];
}

export type IUserDoc = IUser & IMongoDocument;
