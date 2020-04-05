import * as React from "react";

import { FunctionComponent, useMemo } from "react";

import { useCoursesApi } from "../../lib/api";
import { ICourseDoc } from "../../types";
import useAppNavigation from "../../lib/useAppNavigation";

interface CourseWithHandlers {
  course: ICourseDoc;
  editThis: () => void;
  deleteThis: () => void;
}

const CoursesList: FunctionComponent = () => {
  const { courses, deleteCourse } = useCoursesApi();
  const {
    nav: { goToCourse },
  } = useAppNavigation();

  const courseWithHandlers: CourseWithHandlers[] = useMemo(
    () =>
      courses.map((course) => ({
        course,
        editThis: () => goToCourse(course._id),
        deleteThis: () => deleteCourse(course._id),
      })),
    [courses, goToCourse, deleteCourse]
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
        {courseWithHandlers.map(({ course, editThis, deleteThis }) => (
          <tr key={course._id}>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td>
              <button className="btn btn-primary" onClick={editThis}>
                Edit
              </button>
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
