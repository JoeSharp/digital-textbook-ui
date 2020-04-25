import React from "react";
import { ILesson } from "./types";
import useClientSideData from "../useClientSideData";
import useApi from "./useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";
import useLessonApi, { UseLessonApi } from "./useLessonApi";

interface UseCourseLessonsApi extends UseLessonApi {
  refreshLessons: () => void;
  createLesson: (lesson: ILesson) => void;
}

const useCourseLessonsApi = (courseId: string): UseCourseLessonsApi => {
  const { reportError } = useErrorReporting();

  const {
    lessons: { addItem, receiveListOfItems },
  } = useClientSideData();

  const { createLesson, getLessonsForCourse } = useApi();

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

  return {
    ...useLessonApi(),
    refreshLessons: _refreshLessons,
    createLesson: _createLesson,
  };
};

export default useCourseLessonsApi;
