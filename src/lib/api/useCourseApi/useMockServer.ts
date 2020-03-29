import { useState, useCallback } from "react";
import fetchMock from "fetch-mock";
import { v4 as uuidv4 } from "uuid";

import { TEST_COURSES } from "./testData";
import { CourseDocument, CourseType } from "../../../types";
import { MockServer, getId } from "../mockServerUtils";

const resource = "/courses";
const resourceUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}${resource}`;

export const useMockServer = (): MockServer => {
  const [courses, setCourses] = useState<CourseDocument[]>(TEST_COURSES);

  const setup = useCallback(() => {
    fetchMock.get(resourceUrl, courses);
    fetchMock.get(`express:/courses/:id`, url => {
      const id = getId(resource, url);
      const course = courses.find(c => c._id === id);
      if (!!course) {
        return course;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceUrl, (url, options) => {
      if (options.body instanceof String) {
        const courseBody = JSON.parse(options.body as string) as CourseType;
        const course: CourseDocument = {
          _id: uuidv4(),
          ...courseBody
        };

        return course;
      }
      return 401;
    });
    fetchMock.delete(`express:/courses/:id`, url => {
      const id = getId(resource, url);
      setCourses(courses.filter(c => c._id !== id));
      return 204;
    });
  }, [courses, setCourses]);

  return { setup, data: courses };
};
