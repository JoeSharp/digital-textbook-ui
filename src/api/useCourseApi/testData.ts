import { ICourseDoc } from "../../types";

import { v4 as uuid } from "uuid";

const TEST_COURSE_HTML: ICourseDoc = {
  _id: uuid(),
  name: "HTML",
  description: "Learning basic HTML tags to create static pages",
};
const TEST_COURSE_PYTHON: ICourseDoc = {
  _id: uuid(),
  name: "Python Turtle",
  description: "Drawing shapes with the Python Turtle library",
};
const TEST_COURSE_JAVASCRIPT: ICourseDoc = {
  _id: uuid(),
  name: "JavaScript p5.js",
  description: "Creating visualisations in the language of the dynamic web",
};

const TEST_COURSES: ICourseDoc[] = [
  TEST_COURSE_HTML,
  TEST_COURSE_PYTHON,
  TEST_COURSE_JAVASCRIPT,
];

export {
  TEST_COURSE_HTML,
  TEST_COURSE_PYTHON,
  TEST_COURSE_JAVASCRIPT,
  TEST_COURSES,
};
