export interface CourseType {
  _id: string;
  name: string;
  description: string;
}

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
  _id: string;
  courseId: string;
  name: string;
  tasks: LessonTaskType[];
}

export const DEFAULT_LESSON: LessonType = {
  _id: "LOADING",
  courseId: "LOADING",
  name: "LOADING",
  tasks: []
};
