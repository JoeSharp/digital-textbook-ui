import React from "react";
import { ILesson, ILessonDoc } from "./types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";
import { ObjWithStringKey } from "../../lib/useListReducer/types";

export interface UseLessonApi {
  lessons: ILessonDoc[];
  lessonsById: ObjWithStringKey<ILessonDoc>;
  getLesson: (lessonId: string) => void;
  updateLesson: (lessonId: string, updates: ILesson) => void;
  deleteLesson: (lessonId: string) => void;
}

const useLessonApi = (): UseLessonApi => {
  const { reportError } = useErrorReporting();

  const {
    lessons: {
      items: lessonsById,
      itemsInList: lessonsInList,
      addItem,
      removeItem,
    },
  } = useClientSideData();

  const { deleteLesson, getLesson, updateLesson } = useApi();

  const _getLesson = React.useCallback(
    (lessonId: string) => {
      async function f() {
        try {
          const lesson = await getLesson(lessonId);
          addItem(lesson);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getLesson, addItem, reportError]
  );

  const _updateLesson = React.useCallback(
    (lessonId: string, updates: ILesson) => {
      async function f() {
        try {
          const updated = await updateLesson(lessonId, updates);
          addItem(updated);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [updateLesson, addItem, reportError]
  );

  const _deleteLesson = React.useCallback(
    (lessonId: string) => {
      async function f() {
        try {
          await deleteLesson(lessonId);
          removeItem(lessonId);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [deleteLesson, removeItem, reportError]
  );

  return {
    lessons: lessonsInList,
    lessonsById,
    getLesson: _getLesson,
    updateLesson: _updateLesson,
    deleteLesson: _deleteLesson,
  };
};

export default useLessonApi;
