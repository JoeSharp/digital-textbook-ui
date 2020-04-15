import React from "react";
import fetchMock from "fetch-mock";

import { courses as initialCourses } from "../data";
import { ICourseDoc, ICourse } from "../../types";
import { MockServer, getId } from "./mockServerUtils";
import useListReducer from "../../lib/useListReducer";
import { createDocument } from "../data/testDataUtils";

const resource = "/course";
const resourceUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}${resource}`;
const resourceUrlWithId = `express:${resource}/:id`;

export const useMockServer = (): MockServer => {
  const { items: courses, addItem, removeItem } = useListReducer<ICourseDoc>(
    (c) => c._id,
    initialCourses
  );

  const setup = React.useCallback(() => {
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
      const course: ICourseDoc = createDocument(courseBody);
      addItem(course);

      return course;
    });
    fetchMock.put(resourceUrlWithId, (url, options) => {
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
      const removed = courses.find((c) => c._id === id);
      removeItem(id);
      return removed;
    });
  }, [courses, addItem, removeItem]);

  return { setup, data: courses };
};
