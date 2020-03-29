export interface Document {
  _id: string;
}

export interface CourseType {
  name: string;
  description: string;
}

export type CourseDocument = Document & CourseType;

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
  title: string;
  description: string;
  youTubeLink: YouTubeLinkType;
  embeddedIFrame: EmbeddedIFrameType;
}

export interface LessonType {
  courseId: string;
  name: string;
  tasks: LessonTaskType[];
}

export type LessonDocument = Document & LessonType;

const LOADING_TEXT = "LOADING";

export const DEFAULT_COURSE: CourseType = {
  name: LOADING_TEXT,
  description: LOADING_TEXT
};

export const DEFAULT_LESSON: LessonType = {
  courseId: LOADING_TEXT,
  name: LOADING_TEXT,
  tasks: []
};
