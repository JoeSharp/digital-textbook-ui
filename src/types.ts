export interface IMongoDocument {
  _id: string;
}

export const getDocumentId = (doc: IMongoDocument) => doc._id;

export interface ICourse {
  name: string;
  description: string;
}

export type ICourseDoc = IMongoDocument & ICourse;

export interface ILesson {
  courseId: string;
  title: string;
  description: string;
}

export type ILessonDoc = IMongoDocument & ILesson;

export enum ITaskType {
  EmbeddedIFrame = "EmbeddedIFrame",
  FreeFlowText = "FreeFlowText",
}

export interface IBaseTask {
  lessonId: string;
  title: string;
  instruction: string;
}

export interface ITask_EmbeddedIFrame extends IBaseTask {
  type: ITaskType.EmbeddedIFrame;
  baseUrl: string;
  system: EmbeddedIFrameSystem;
}
export interface ITask_FreeFlowText extends IBaseTask {
  type: ITaskType.FreeFlowText;
}

export type ITask = ITask_EmbeddedIFrame | ITask_FreeFlowText;

export type ITaskDoc = IMongoDocument & ITask;

export enum EmbeddedIFrameSystem {
  Trinket,
  p5js,
  codeDotOrg,
  codePen,
}

export interface YouTubeLinkType {
  youTubeId: string;
  startTime?: number;
}

export interface IUser {
  emailAddress: string;
}

export type IUserDoc = IUser & IMongoDocument;
