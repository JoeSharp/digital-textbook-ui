import React from "react";
import fetchMock from "fetch-mock";

import { tasks as initialTaskList } from "../data";
import { ITaskDoc, ITask } from "../../api/useTaskApi/types";
import { MockServer, getId } from "./mockServerUtils";
import { createDocument } from "../data/testDataUtils";
import useObjectReducer from "../../lib/useObjectReducer";

const resource = "/task";
const resourceForLesson = `${resource}/forLesson`;
const resourceForLessonId = `express:${resourceForLesson}/:id`;
const resourceWithTaskId = `express:${resource}/:id`;

const initialTasks = initialTaskList.reduce(
  (acc, curr) => ({ ...acc, [curr._id]: curr }),
  {}
);

export const useMockServer = (): MockServer => {
  const {
    items: tasksById,
    itemsInList: tasks,
    addItem,
    removeItem,
  } = useObjectReducer<ITaskDoc>((c) => c._id, initialTasks);

  const setup = React.useCallback(() => {
    fetchMock.get(resourceForLessonId, (url) => {
      const lessonId = getId(resourceForLesson, url);
      const tasksForLesson = tasks.filter((l) => l.lessonId === lessonId);
      if (tasksForLesson.length > 0) {
        return tasksForLesson;
      } else {
        return 404;
      }
    });
    fetchMock.get(resourceWithTaskId, (url) => {
      const id = getId(resource, url);
      const task = tasksById[id];
      if (!!task) {
        return task;
      } else {
        return 404;
      }
    });
    fetchMock.post(resourceForLessonId, (url, options) => {
      const lessonId = getId(resourceForLesson, url);
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
      const removed = tasksById[id];
      removeItem(id);
      return removed;
    });
  }, [tasks, tasksById, addItem, removeItem]);

  return { setup, data: tasks };
};
