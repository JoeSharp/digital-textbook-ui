import * as React from "react";

import { FunctionComponent, useEffect } from "react";

import { useCoursesApi } from "../../lib/api";

const CoursesList: FunctionComponent = () => {
  const { courses, getCourses } = useCoursesApi();

  useEffect(() => getCourses(), [getCourses]);

  return (
    <ul>
      {courses.map(course => (
        <li key={course._id}>{course.name}</li>
      ))}
    </ul>
  );
};

export default CoursesList;
