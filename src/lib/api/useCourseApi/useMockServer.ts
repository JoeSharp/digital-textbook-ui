import { useState, useCallback } from "react";
import fetchMock from "fetch-mock";
import { match } from "path-to-regexp";

import { TEST_COURSES } from "./testData";
import { CourseType } from "../../../types";
import { MockServer } from "../useMockServerBase";

const baseUrl = `${process.env.REACT_APP_SERVICE_BASE_URL}/courses`;

interface KeyId {
  id: string;
}
const matchId = match<KeyId>(`/courses/:id`, {
  decode: decodeURIComponent
});
const getId = (url: string) => {
  const result = matchId(
    url.replace(process.env.REACT_APP_SERVICE_BASE_URL, "")
  );
  if (result) {
    return result.params["id"];
  } else {
    return undefined;
  }
};

export const useMockServer = (): MockServer => {
  const [courses, setCourses] = useState<CourseType[]>(TEST_COURSES);

  const setup = useCallback(() => {
    fetchMock.get(baseUrl, courses);
    fetchMock.delete(`express:/courses/:id`, url => {
      const id = getId(url);
      setCourses(courses.filter(c => c._id !== id));
      return 204;
    });
  }, [courses, setCourses]);

  return { setup, data: courses };
};
