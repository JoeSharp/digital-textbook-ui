import * as React from "react";
import CoursesList from "./CoursesList";
import fetchMock from "fetch-mock";
import { CourseType } from "../../types";

export default {
  title: "Courses List",
  component: CoursesList
};

export const Basic = () => {
  const payload: CourseType[] = [
    {
      _id: "1",
      name: "Test Course 1"
    }
  ];
  fetchMock
    .restore()
    .getOnce(`${process.env.REACT_APP_SERVICE_BASE_URL}/courses`, payload);

  return <CoursesList />;
};
