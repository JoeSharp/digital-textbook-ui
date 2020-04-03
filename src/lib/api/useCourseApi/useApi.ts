import { useCallback } from "react";
import useHttpClient from "../../useHttpClient";
import { CourseDocument, CourseType } from "../../../types";

const COURSES_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/course`;

interface UseApi {
  getCourses: () => Promise<CourseDocument[]>;
  createCourse: (updates: CourseType) => Promise<CourseDocument>;
  deleteCourse: (courseId: string) => void;
}

const useApi = (): UseApi => {
  const {
    httpGetJson,
    httpPostJsonResponse,
    httpDeleteEmptyResponse
  } = useHttpClient();
  return {
    getCourses: useCallback(() => httpGetJson(COURSES_RESOURCE), [httpGetJson]),
    createCourse: useCallback(
      (newCourse: CourseType) =>
        httpPostJsonResponse(COURSES_RESOURCE, newCourse),
      [httpPostJsonResponse]
    ),
    deleteCourse: useCallback(
      (courseId: string) =>
        httpDeleteEmptyResponse(`${COURSES_RESOURCE}/${courseId}`),
      [httpDeleteEmptyResponse]
    )
  };
};

export default useApi;