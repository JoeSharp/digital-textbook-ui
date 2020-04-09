import { useCallback } from "react";
import useHttpClient from "../../lib/useHttpClient";
import { ICourseDoc, ICourse } from "../../types";

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
  const {
    httpGetJson,
    httpPostJsonResponse,
    httpPutJsonResponse,
    httpDeleteEmptyResponse,
  } = useHttpClient();
  return {
    getCourses: useCallback(() => httpGetJson(COURSES_RESOURCE), [httpGetJson]),
    getCourse: useCallback(
      (courseId: string) => httpGetJson(getCoursesResourceWithId(courseId)),
      [httpGetJson]
    ),
    createCourse: useCallback(
      (newCourse: ICourse) =>
        httpPostJsonResponse(COURSES_RESOURCE, {
          body: JSON.stringify(newCourse),
        }),
      [httpPostJsonResponse]
    ),
    updateCourse: useCallback(
      (courseId: string, updates: ICourse) =>
        httpPutJsonResponse(getCoursesResourceWithId(courseId), {
          body: JSON.stringify(updates),
        }),
      [httpPutJsonResponse]
    ),
    deleteCourse: useCallback(
      (courseId: string) =>
        httpDeleteEmptyResponse(`${COURSES_RESOURCE}/${courseId}`),
      [httpDeleteEmptyResponse]
    ),
  };
};

export default useApi;
