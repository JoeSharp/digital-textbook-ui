import { Document } from "mongoose";

export interface ICourse {
  name: string;
  description: string;
}

export type ICourseDoc = Document & ICourse;

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

const LOADING_TEXT = "LOADING";

export const DEFAULT_COURSE: CourseType = {
  name: LOADING_TEXT,
  description: LOADING_TEXT,
};

export const DEFAULT_LESSON: LessonType = {
  courseId: LOADING_TEXT,
  name: LOADING_TEXT,
  tasks: [],
};
