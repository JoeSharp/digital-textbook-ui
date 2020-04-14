import * as React from "react";
import fetchMock from "fetch-mock";

import { tasks as initialTasks } from "../data";
import { ITaskDoc, ITask } from "../../types";
import { MockServer, getId } from "./mockServerUtils";
import useListReducer from "../../lib/useListReducer";
import { createDocument } from "../data/testDataUtils";

const resource = "/task";
const resourceForLessonId = `express:${process.env.REACT_APP_SERVICE_BASE_URL}${resource}/forLesson/:id`;
const resourceWithTaskId = `express:${resource}/:id`;

export const useMockServer = (): MockServer => {
  const { items: tasks, addItem, removeItem } = useListReducer<ITaskDoc>(
    (c) => c._id,
    initialTasks
  );

  const setup = React.useCallback(() => {
    fetchMock.get(resourceForLessonId, (url) => {
      const lessonId = getId(resource, url);
      const tasksForLesson = tasks.filter((l) => l.lessonId === lessonId);
      if (tasksForLesson.length > 0) {
        return tasksForLesson;
      } else {
        return 404;
      }
    });
    fetchMock.get(resourceWithTaskId, (url) => {
      const id = getId(resource, url);
      const task = tasks.find((c) => c._id === id);
      if (!!task) {
        return task;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceForLessonId, (url, options) => {
      const lessonId = getId(resource, url);
      const taskBody = JSON.parse(options.body as string) as ITask;
      const task: ITaskDoc = createDocument({ lessonId, ...taskBody });
      addItem(task);

      return task;
    });
    fetchMock.put(resourceWithTaskId, (url, options) => {
      const _id = getId(resource, url);
      const taskBody = JSON.parse(options.body as string) as ITask;
      const task: ITaskDoc = {
        _id,
        ...taskBody,
      };
      addItem(task);
      return task;
    });
    fetchMock.delete(resourceWithTaskId, (url) => {
      const id = getId(resource, url);
      removeItem(id);
      return 204;
    });
  }, [tasks, addItem, removeItem]);

  return { setup, data: tasks };
};
