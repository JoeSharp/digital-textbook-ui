import React from "react";
import { ITaskDoc, ITask } from "./types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const TASK_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/task`;

const getResourceWithLessonId = (lessonId: string) =>
  `${TASK_RESOURCE}/forLesson/${lessonId}`;
const getResourceWithTaskId = (taskId: string) => `${TASK_RESOURCE}/${taskId}`;

interface UseApi {
  getTasksForLesson: (lessonId: string) => Promise<ITaskDoc[]>;
  getTask: (taskId: string) => Promise<ITaskDoc>;
  createTask: (lessonId: string, newTask: ITask) => Promise<ITaskDoc>;
  updateTask: (taskId: string, updates: ITask) => Promise<ITaskDoc>;
  deleteTask: (taskId: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getTasksForLesson: React.useCallback(
      (lessonId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        return fetch(getResourceWithLessonId(lessonId), {
          headers,
        })
          .then(handle200)
          .then((r) => r.json());
      },
      [idToken, handle200]
    ),
    getTask: React.useCallback(
      async (taskId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithTaskId(taskId), {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    createTask: React.useCallback(
      async (lessonId: string, newTask: ITask) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithLessonId(lessonId), {
          method: "post",
          body: JSON.stringify(newTask),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    updateTask: React.useCallback(
      async (taskId: string, updates: ITask) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithTaskId(taskId), {
          method: "put",
          body: JSON.stringify(updates),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    deleteTask: React.useCallback(
      async (taskId: string) => {
        let headers = {
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithTaskId(taskId), {
          method: "delete",
          headers,
        });
        return await handle200(response);
      },
      [idToken, handle200]
    ),
  };
};

export default useApi;
