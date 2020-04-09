import * as React from "react";

import { FunctionComponent, useMemo } from "react";

import { useCoursesApi } from "../../../api";
import { ICourseDoc } from "../../../types";
import useAppNavigation from "../../../lib/useAppNavigation";
import ConfirmDialog, { useDialog } from "../../GeneralPurpose/ConfirmDialog";

interface CourseWithHandlers {
  course: ICourseDoc;
  editThis: () => void;
  deleteThis: () => void;
}

interface ConfirmDeleteData {
  courseId: string;
}

const CoursesList: FunctionComponent = () => {
  const { courses, deleteCourse } = useCoursesApi();
  const {
    nav: { goToCourse },
  } = useAppNavigation();

  const {
    componentProps: confirmDeleteProps,
    showDialog: showDeleteDialog,
  } = useDialog<ConfirmDeleteData>({
    getQuestion: () => "Are you sure you wish to delete this course?",
    getDetails: ({ courseId }) => `Course: ${courseId}`,
    onConfirm: ({ courseId }) => {
      deleteCourse(courseId);
    },
  });

  const courseWithHandlers: CourseWithHandlers[] = useMemo(
    () =>
      courses.map((course) => ({
        course,
        editThis: () => goToCourse(course._id),
        deleteThis: () => showDeleteDialog({ courseId: course._id }),
      })),
    [courses, goToCourse, showDeleteDialog]
  );

  return (
    <React.Fragment>
      <ConfirmDialog {...confirmDeleteProps} />
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
    </React.Fragment>
  );
};

export default CoursesList;
