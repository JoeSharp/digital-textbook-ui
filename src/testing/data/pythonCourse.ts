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
  name: "Python Turtle",
  description: "Drawing shapes with the Python Turtle library",
};

export const lesson1: ILessonDoc = createDocument<ILesson>({
  courseId: course._id,
  title: "Drawing Lines",
  description:
    "Learn how to draw lines by directing the turtle around the screen",
});

export const lesson1Task1: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIFrame,
  title: "New Sketch",
  instruction:
    "Log into trinket.io using google account and create new Python trinket",
});

export const lesson1Task2: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIFrame,
  title: "Draw Square",
  instruction: "Use combination of forward and left/right to draw a square",
});

export const lesson1Task3: ITaskDoc = createDocument<ITask>({
  lessonId: lesson1._id,
  type: ITaskType.EmbeddedIFrame,
  title: "Draw an L-Shape",
  instruction: "Draw an L-shape to match this trinket...",
});

export const lessons: ILessonDoc[] = [lesson1];

export const tasks: ITaskDoc[] = [lesson1Task1, lesson1Task2, lesson1Task3];
