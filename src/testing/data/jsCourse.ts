import {
  ICourseDoc,
  ILessonDoc,
  ITaskDoc,
  ILesson,
  ITask,
  ITaskType,
} from "../../types";

import { v4 as uuid } from "uuid";
import { createDocument } from "./testDataUtils";

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
  type: ITaskType.EmbeddedIFrame,
  title: "New Sketch",
  instruction: "Log into p5.js using google account and create new sketch",
});

export const lesson1Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIFrame,
  title: "Draw Rectangle",
  instruction:
    "Use the rect function to draw a rectangle inside the update() function",
});

export const lesson1Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIFrame,
  title: "Draw Circle",
  instruction:
    "Draw a circle, experiment with the x, y values to place the circle where you want it.",
});

export const lessons: ILessonDoc[] = [lesson1];

export const tasks: ITaskDoc[] = [lesson1Task1, lesson1Task2, lesson1Task3];
