export interface Document {
  _id: string;
}

export const getDocumentId = (doc: Document) => doc._id;

export interface ICourse {
  name: string;
  description: string;
}

export type ICourseDoc = Document & ICourse;

export const DEFAULT_COURSE: ICourse = {
  name: "",
  description: "",
};

export interface ILesson {
  title: string;
  description: string;
}

export type ILessonDoc = Document & ILesson;

export const DEFAULT_LESSON: ILesson = {
  title: "",
  description: "",
};

export interface ITask {
  title: string;
  instruction: string;
}

export type ITaskDoc = Document & ITask;

export const DEFAULT_TASK: ITask = {
  title: "",
  instruction: "",
};

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
