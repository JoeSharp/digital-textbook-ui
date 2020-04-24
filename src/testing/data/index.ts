import {
  ICourseDoc,
  ILessonDoc,
  ITaskDoc,
  IPrimmChallengeDoc,
} from "../../types";

import {
  course as htmlCourse,
  lessons as htmlLessons,
  tasks as htmlTasks,
} from "./courses/htmlCourse";

import {
  course as pythonCourse,
  lessons as pythonLessons,
  tasks as pythonTasks,
} from "./courses/pythonCourse";

import {
  course as jsCourse,
  lessons as jsLessons,
  tasks as jsTasks,
} from "./courses/jsCourse";

import { challenge as loopsChallenge } from "./primm/loopsPrimm";

export const courses: ICourseDoc[] = [htmlCourse, pythonCourse, jsCourse];
export const lessons: ILessonDoc[] = [
  ...htmlLessons,
  ...pythonLessons,
  ...jsLessons,
];
export const tasks: ITaskDoc[] = [...htmlTasks, ...pythonTasks, ...jsTasks];
export const primmChallenges: IPrimmChallengeDoc[] = [loopsChallenge];
