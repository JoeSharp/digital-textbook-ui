import { useCallback } from "react";
import fetchMock from "fetch-mock";
import { v4 as uuidv4 } from "uuid";

import { TEST_COURSES } from "./testData";
import { ICourseDoc, ICourse } from "../../types";
import { MockServer, getId } from "../mockServerUtils";
import useListReducer from "../../lib/useListReducer";

const resource = "/course";
const resourceUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}${resource}`;
const resourceUrlWithId = `express:${resource}/:id`;

export const useMockServer = (): MockServer => {
  const { items: courses, addItem, removeItem } = useListReducer<ICourseDoc>(
    (c) => c._id,
    TEST_COURSES
  );

  const setup = useCallback(() => {
    fetchMock.get(resourceUrl, courses);
    fetchMock.get(resourceUrlWithId, (url) => {
      const id = getId(resource, url);
      const course = courses.find((c) => c._id === id);
      if (!!course) {
        return course;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceUrl, (url, options) => {
      const courseBody = JSON.parse(options.body as string) as ICourse;
      const course: ICourseDoc = {
        _id: uuidv4(),
        ...courseBody,
      };
      addItem(course);

      return course;
    });
    fetchMock.patch(resourceUrlWithId, (url, options) => {
      const _id = getId(resource, url);
      const courseBody = JSON.parse(options.body as string) as ICourse;
      const course: ICourseDoc = {
        _id,
        ...courseBody,
      };
      addItem(course);
      return course;
    });
    fetchMock.delete(resourceUrlWithId, (url) => {
      const id = getId(resource, url);
      removeItem(id);
      return 204;
    });
  }, [courses, addItem, removeItem]);

  return { setup, data: courses };
};
