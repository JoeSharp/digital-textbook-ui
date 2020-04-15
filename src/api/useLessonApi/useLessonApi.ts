import React from "react";
import { ILesson, ILessonDoc } from "../../types";
import { ObjWithStringKey } from "../../lib/useObjectReducer/useObjectReducer";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../lib/ErrorPage";

interface UseLessonApi {
  getLesson: (lessonId: string) => void;
  refreshLessons: () => void;
  createLesson: (lesson: ILesson) => void;
  updateLesson: (lessonId: string, updates: ILesson) => void;
  deleteLesson: (lessonId: string) => void;
  lessons: ILessonDoc[];
  lessonsById: ObjWithStringKey<ILessonDoc>;
}

const useLessonApi = (courseId: string): UseLessonApi => {
  const { reportError } = useErrorReporting();

  const {
    lessons: {
      items: lessonsById,
      itemsInList: lessonsInList,
      addItem,
      receiveListOfItems,
      removeItem,
    },
  } = useClientSideData();

  const {
    createLesson,
    deleteLesson,
    getLesson,
    getLessonsForCourse,
    updateLesson,
  } = useApi();

  const _refreshLessons = React.useCallback(() => {
    async function f() {
      try {
        const lessons = await getLessonsForCourse(courseId);
        receiveListOfItems(lessons);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [courseId, receiveListOfItems, getLessonsForCourse, reportError]);

  React.useEffect(_refreshLessons, [_refreshLessons]);

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

  const _createLesson = React.useCallback(
    (lesson: ILesson) => {
      async function f() {
        try {
          const newLesson = await createLesson(courseId, lesson);
          addItem(newLesson);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [courseId, createLesson, addItem, reportError]
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
    refreshLessons: _refreshLessons,
    createLesson: _createLesson,
    updateLesson: _updateLesson,
    deleteLesson: _deleteLesson,
  };
};

export default useLessonApi;
