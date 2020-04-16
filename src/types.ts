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

export type ITaskType =
  | "Trinket"
  | "p5js"
  | "codepen"
  | "code.org"
  | "OtherSite"
  | "FreeFlowText";

export interface ITask {
  lessonId: string;
  type: ITaskType;
  title: string;
  instruction: string;
}

export type ITaskDoc = IMongoDocument & ITask;

export interface EmbeddedTrinketType {
  type: "trinket";
  trinketId: string;
}

export type EmbeddedIFrameType = EmbeddedTrinketType;

export interface YouTubeLinkType {
  youTubeId: string;
  startTime?: number;
}

export interface LessonTaskType {
  lessonId: string;
  title: string;
  description: string;
  youTubeLink: YouTubeLinkType;
  embeddedIFrame: EmbeddedIFrameType;
}

export interface IUser {
  emailAddress: string;
}

export type IUserDoc = IUser & IMongoDocument;
