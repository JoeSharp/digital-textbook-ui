import React from "react";
import { ILesson, ILessonDoc } from "../../types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../lib/ErrorPage";

interface UseSingleLessonsApi {
  lesson: ILessonDoc | undefined;
  updateLesson: (updates: ILesson) => void;
  deleteLesson: () => void;
}

const useCourseLessonsApi = (lessonId: string): UseSingleLessonsApi => {
  const { reportError } = useErrorReporting();

  const { getLesson, updateLesson, deleteLesson } = useApi();

  const {
    lessons: { items, addItem, removeItem },
  } = useClientSideData();

  const lesson: ILessonDoc | undefined = React.useMemo(() => items[lessonId], [
    lessonId,
    items,
  ]);

  React.useEffect(() => {
    async function f() {
      try {
        const lesson = await getLesson(lessonId);
        addItem(lesson);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [lessonId, getLesson, addItem, reportError]);

  const _updateLesson = React.useCallback(
    (updates: ILesson) => {
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
    [lessonId, updateLesson, addItem, reportError]
  );

  const _deleteLesson = React.useCallback(() => {
    async function f() {
      try {
        await deleteLesson(lessonId);
        removeItem(lessonId);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [lessonId, deleteLesson, removeItem, reportError]);

  return {
    lesson,
    updateLesson: _updateLesson,
    deleteLesson: _deleteLesson,
  };
};

export default useCourseLessonsApi;
