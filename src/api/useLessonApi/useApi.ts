import React from "react";
import { ILessonDoc, ILesson } from "../../types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const LESSON_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/lesson`;

const getResourceWithCourseId = (courseId: string) =>
  `${LESSON_RESOURCE}/forCourse/${courseId}`;
const getResourceWithLessonId = (lessonId: string) =>
  `${LESSON_RESOURCE}/${lessonId}`;

interface UseApi {
  getLessonsForCourse: (courseId: string) => Promise<ILessonDoc[]>;
  getLesson: (lessonId: string) => Promise<ILessonDoc>;
  createLesson: (courseId: string, newLesson: ILesson) => Promise<ILessonDoc>;
  updateLesson: (lessonId: string, updates: ILesson) => Promise<ILessonDoc>;
  deleteLesson: (lessonId: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getLessonsForCourse: React.useCallback(
      (courseId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        return fetch(getResourceWithCourseId(courseId), {
          headers,
        })
          .then(handle200)
          .then((r) => r.json());
      },
      [idToken, handle200]
    ),
    getLesson: React.useCallback(
      async (lessonId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithLessonId(lessonId), {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    createLesson: React.useCallback(
      async (courseId: string, newLesson: ILesson) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithCourseId(courseId), {
          method: "post",
          body: JSON.stringify(newLesson),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    updateLesson: React.useCallback(
      async (lessonId: string, updates: ILesson) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithLessonId(lessonId), {
          method: "put",
          body: JSON.stringify(updates),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    deleteLesson: React.useCallback(
      async (lessonId: string) => {
        let headers = {
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getResourceWithLessonId(lessonId), {
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
