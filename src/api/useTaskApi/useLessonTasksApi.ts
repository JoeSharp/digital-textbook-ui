import React from "react";
import { ITask } from "../../types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import useTaskApi, { UseTaskApi } from "./useTaskApi";
import { useErrorReporting } from "../../components/App/ErrorPage";

interface UseLessonTasksApi extends UseTaskApi {
  refreshTasks: () => void;
  createTask: (task: ITask) => void;
}

const useLessonTasksApi = (lessonId: string): UseLessonTasksApi => {
  const { reportError } = useErrorReporting();

  const {
    tasks: { addItem, receiveListOfItems },
  } = useClientSideData();

  const { createTask, getTasksForLesson } = useApi();

  const _refreshTasks = React.useCallback(() => {
    async function f() {
      try {
        const lessons = await getTasksForLesson(lessonId);
        receiveListOfItems(lessons);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [lessonId, receiveListOfItems, getTasksForLesson, reportError]);

  React.useEffect(_refreshTasks, [_refreshTasks]);

  const _createTask = React.useCallback(
    (task: ITask) => {
      async function f() {
        try {
          const newTask = await createTask(lessonId, task);
          addItem(newTask);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [lessonId, createTask, addItem, reportError]
  );

  return {
    ...useTaskApi(),
    refreshTasks: _refreshTasks,
    createTask: _createTask,
  };
};

export default useLessonTasksApi;
