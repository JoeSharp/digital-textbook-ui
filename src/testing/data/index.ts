import { ICourseDoc, ILessonDoc, ITaskDoc } from "../../types";

import {
  course as htmlCourse,
  lessons as htmlLessons,
  tasks as htmlTasks,
} from "./htmlCourse";

import {
  course as pythonCourse,
  lessons as pythonLessons,
  tasks as pythonTasks,
} from "./pythonCourse";

import {
  course as jsCourse,
  lessons as jsLessons,
  tasks as jsTasks,
} from "./jsCourse";

export const courses: ICourseDoc[] = [htmlCourse, pythonCourse, jsCourse];
export const lessons: ILessonDoc[] = [
  ...htmlLessons,
  ...pythonLessons,
  ...jsLessons,
];
export const tasks: ITaskDoc[] = [...htmlTasks, ...pythonTasks, ...jsTasks];
