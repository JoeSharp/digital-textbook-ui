import React from "react";
import { ITask, ITaskDoc } from "./types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";
import { ObjWithStringKey } from "../../lib/useObjectReducer/types";

export interface UseTaskApi {
  tasks: ITaskDoc[];
  tasksById: ObjWithStringKey<ITaskDoc>;
  getTask: (taskId: string) => void;
  updateTask: (taskId: string, updates: ITask) => void;
  deleteTask: (taskId: string) => void;
}

const useTaskApi = (): UseTaskApi => {
  const { reportError } = useErrorReporting();

  const {
    tasks: { items: tasksById, itemsInList: tasksInList, addItem, removeItem },
  } = useClientSideData();

  const { deleteTask, getTask, updateTask } = useApi();

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
    updateTask: _updateTask,
    deleteTask: _deleteTask,
  };
};

export default useTaskApi;
