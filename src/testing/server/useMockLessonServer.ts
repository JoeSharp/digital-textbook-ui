import React from "react";
import fetchMock from "fetch-mock";

import { lessons as initialLessons } from "../data";
import { ILessonDoc, ILesson } from "../../api/useLessonApi/types";
import { MockServer, getId } from "./mockServerUtils";
import useListReducer from "../../lib/useListReducer";
import { createDocument } from "../data/testDataUtils";

const resource = "/lesson";
const resourceForCourse = `${resource}/forCourse`;
const resourceForCourseId = `express:${resourceForCourse}/:id`;
const resourceWithLessonId = `express:${resource}/:id`;

export const useMockServer = (): MockServer => {
  const { items: lessons, addItem, removeItem } = useListReducer<ILessonDoc>(
    (c) => c._id,
    initialLessons
  );

  const setup = React.useCallback(() => {
    fetchMock.get(resourceForCourseId, (url) => {
      const courseId = getId(resourceForCourse, url);
      const lessonsForCourse = lessons.filter((l) => l.courseId === courseId);
      if (lessonsForCourse.length > 0) {
        return lessonsForCourse;
      } else {
        return 404;
      }
    });
    fetchMock.get(resourceWithLessonId, (url) => {
      const id = getId(resource, url);
      const lesson = lessons.find((c) => c._id === id);
      if (!!lesson) {
        return lesson;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceForCourseId, (url, options) => {
      const courseId = getId(resourceForCourse, url);
      const lessonBody = JSON.parse(options.body as string) as ILesson;
      const lesson: ILessonDoc = createDocument({ courseId, ...lessonBody });
      addItem(lesson);

      return lesson;
    });
    fetchMock.put(resourceWithLessonId, (url, options) => {
      const _id = getId(resource, url);
      const lessonBody = JSON.parse(options.body as string) as ILesson;
      const lesson: ILessonDoc = {
        _id,
        ...lessonBody,
      };
      addItem(lesson);
      return lesson;
    });
    fetchMock.delete(resourceWithLessonId, (url) => {
      const id = getId(resource, url);
      const removed = lessons.find((l) => l._id === id);
      removeItem(id);
      return removed;
    });
  }, [lessons, addItem, removeItem]);

  return { setup, data: lessons };
};
