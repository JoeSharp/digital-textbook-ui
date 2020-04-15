import React from "react";
import { ITask, ITaskDoc } from "../../types";
import { ObjWithStringKey } from "../../lib/useObjectReducer/useObjectReducer";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../lib/ErrorPage";

interface UseTaskApi {
  getTask: (taskId: string) => void;
  refreshTasks: () => void;
  createTask: (task: ITask) => void;
  updateTask: (taskId: string, updates: ITask) => void;
  deleteTask: (taskId: string) => void;
  tasks: ITaskDoc[];
  tasksById: ObjWithStringKey<ITaskDoc>;
}

const useTaskApi = (lessonId: string): UseTaskApi => {
  const { reportError } = useErrorReporting();

  const {
    tasks: {
      items: tasksById,
      itemsInList: tasksInList,
      addItem,
      receiveListOfItems,
      removeItem,
    },
  } = useClientSideData();

  const {
    createTask,
    deleteTask,
    getTask,
    getTasksForLesson,
    updateTask,
  } = useApi();

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

  const _getTask = React.useCallback(
    (lessonId: string) => {
      async function f() {
        try {
          const lesson = await getTask(lessonId);
          addItem(lesson);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getTask, addItem, reportError]
  );

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

  const _updateTask = React.useCallback(
    (taskId: string, updates: ITask) => {
      async function f() {
        try {
          const updated = await updateTask(taskId, updates);
          addItem(updated);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [updateTask, addItem, reportError]
  );

  const _deleteTask = React.useCallback(
    (taskId: string) => {
      async function f() {
        try {
          await deleteTask(taskId);
          removeItem(taskId);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [deleteTask, removeItem, reportError]
  );

  return {
    tasks: tasksInList,
    tasksById,
    getTask: _getTask,
    refreshTasks: _refreshTasks,
    createTask: _createTask,
    updateTask: _updateTask,
    deleteTask: _deleteTask,
  };
};

export default useTaskApi;
