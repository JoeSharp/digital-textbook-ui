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

export type LessonTaskDocument = Document & LessonTaskType;

export interface LessonType {
  courseId: string;
  name: string;
  tasks: LessonTaskType[];
}

export type LessonDocument = Document & LessonType;

export const DEFAULT_LESSON: LessonType = {
  courseId: "",
  name: "",
  tasks: [],
};
