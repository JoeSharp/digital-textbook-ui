import React from "react";
import { ITask, ITaskDoc } from "./types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";

interface UseSingleTasksApi {
  task: ITaskDoc | undefined;
  updateTask: (updates: ITask) => void;
  deleteTask: () => void;
}

const useCourseTasksApi = (taskId: string): UseSingleTasksApi => {
  const { reportError } = useErrorReporting();

  const { getTask, updateTask, deleteTask } = useApi();

  const {
    tasks: { items, addItem, removeItem },
  } = useClientSideData();

  const task: ITaskDoc | undefined = React.useMemo(() => items[taskId], [
    taskId,
    items,
  ]);

  React.useEffect(() => {
    async function f() {
      try {
        const task = await getTask(taskId);
        addItem(task);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [taskId, getTask, addItem, reportError]);

  const _updateTask = React.useCallback(
    (updates: ITask) => {
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
    [taskId, updateTask, addItem, reportError]
  );

  const _deleteTask = React.useCallback(() => {
    async function f() {
      try {
        await deleteTask(taskId);
        removeItem(taskId);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [taskId, deleteTask, removeItem, reportError]);

  return {
    task,
    updateTask: _updateTask,
    deleteTask: _deleteTask,
  };
};

export default useCourseTasksApi;
