import {
  ICourseDoc,
  ILessonDoc,
  ITaskDoc,
  ILesson,
  ITask,
  ITaskType,
  IEmbeddedIframeSystem,
} from "../../../types";

import { v4 as uuid } from "uuid";
import { createDocument } from "../testDataUtils";

export const course: ICourseDoc = {
  _id: uuid(),
  name: "JavaScript p5 js",
  description: "Creating visualisations in the language of the dynamic web",
};

export const lesson1: ILessonDoc = createDocument<ILesson>({
  courseId: course._id,
  title: "Drawing Shapes",
  description: "Learn how to draw static shapes within a p5.js sketch",
});

export const lesson1Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "New Sketch",
  instruction: "Log into p5.js using google account and create new sketch",
  system: IEmbeddedIframeSystem.p5js,
  baseUrl: "https://editor.p5js.org/",
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson1Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "Draw Rectangle",
  instruction:
    "Use the rect function to draw a rectangle inside the update() function",
  system: IEmbeddedIframeSystem.p5js,
  baseUrl: "https://editor.p5js.org/",
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lesson1Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIframe,
  title: "Draw Circle",
  instruction:
    "Draw a circle, experiment with the x, y values to place the circle where you want it.",
  system: IEmbeddedIframeSystem.p5js,
  baseUrl: "https://editor.p5js.org/",
  videoLink: "https://www.youtube.com/watch?v=wturXRf3cZQ",
});

export const lessons: ILessonDoc[] = [lesson1];

export const tasks: ITaskDoc[] = [lesson1Task1, lesson1Task2, lesson1Task3];
