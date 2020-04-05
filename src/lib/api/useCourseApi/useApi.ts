import { useCallback } from "react";
import useHttpClient from "../../useHttpClient";
import { ICourseDoc, ICourse } from "../../../types";

const COURSES_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/course`;

interface UseApi {
  getCourses: () => Promise<ICourseDoc[]>;
  getCourse: (courseId: string) => Promise<ICourseDoc>;
  createCourse: (updates: ICourse) => Promise<ICourseDoc>;
  deleteCourse: (courseId: string) => Promise<void>;
}

const useApi = (): UseApi => {
  const {
    httpGetJson,
    httpPostJsonResponse,
    httpDeleteEmptyResponse,
  } = useHttpClient();
  return {
    getCourses: useCallback(() => httpGetJson(COURSES_RESOURCE), [httpGetJson]),
    getCourse: useCallback(
      (courseId: string) => httpGetJson(`${COURSES_RESOURCE}/${courseId}`),
      [httpGetJson]
    ),
    createCourse: useCallback(
      (newCourse: ICourse) => httpPostJsonResponse(COURSES_RESOURCE, newCourse),
      [httpPostJsonResponse]
    ),
    deleteCourse: useCallback(
      (courseId: string) =>
        httpDeleteEmptyResponse(`${COURSES_RESOURCE}/${courseId}`),
      [httpDeleteEmptyResponse]
    ),
  };
};

export default useApi;
