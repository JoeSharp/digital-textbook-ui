import * as React from "react";

import { FunctionComponent, useEffect, useMemo } from "react";

import { useCoursesApi } from "../../lib/api";
import { CourseDocument } from "../../types";

interface CourseWithHandlers {
  course: CourseDocument;
  deleteThis: () => void;
}

const CoursesList: FunctionComponent = () => {
  const { courses, getCourses, deleteCourse } = useCoursesApi();

  useEffect(getCourses, [getCourses]);

  const courseWithHandlers: CourseWithHandlers[] = useMemo(
    () =>
      courses.map(course => ({
        course,
        deleteThis: () => deleteCourse(course._id)
      })),
    [courses, deleteCourse]
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courseWithHandlers.map(({ course, deleteThis }) => (
          <tr key={course._id}>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td>
              <button className="btn btn-danger" onClick={deleteThis}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoursesList;
