import { useCallback } from "react";
import { ICourseDoc, ICourse } from "../../types";
import { useAuthenticationContext } from "../../lib/authentication";
import useCheckHttpStatus from "../../lib/useCheckHttpStatus";

const COURSES_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/course`;

const getCoursesResourceWithId = (courseId: string) =>
  `${COURSES_RESOURCE}/${courseId}`;

interface UseApi {
  getCourses: () => Promise<ICourseDoc[]>;
  getCourse: (courseId: string) => Promise<ICourseDoc>;
  createCourse: (newCourseDetails: ICourse) => Promise<ICourseDoc>;
  updateCourse: (courseId: string, updates: ICourse) => Promise<ICourseDoc>;
  deleteCourse: (courseId: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const { idToken } = useAuthenticationContext();
  const handle200 = useCheckHttpStatus(200);

  return {
    getCourses: useCallback(() => {
      let headers = {
        Accept: "application/json",
        Authorization: `Bearer ${idToken}`,
      };
      return fetch(COURSES_RESOURCE, {
        headers,
      })
        .then(handle200)
        .then((r) => r.json());
    }, [idToken, handle200]),
    getCourse: useCallback(
      async (courseId: string) => {
        let headers = {
          Accept: "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getCoursesResourceWithId(courseId), {
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    createCourse: useCallback(
      async (newCourse: ICourse) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(COURSES_RESOURCE, {
          method: "post",
          body: JSON.stringify(newCourse),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    updateCourse: useCallback(
      async (courseId: string, updates: ICourse) => {
        let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getCoursesResourceWithId(courseId), {
          method: "put",
          body: JSON.stringify(updates),
          headers,
        });
        const r = await handle200(response);
        return r.json();
      },
      [idToken, handle200]
    ),
    deleteCourse: useCallback(
      async (courseId: string) => {
        let headers = {
          Authorization: `Bearer ${idToken}`,
        };
        const response = await fetch(getCoursesResourceWithId(courseId), {
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
