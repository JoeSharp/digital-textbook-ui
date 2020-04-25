import React from "react";

import { FunctionComponent, useMemo } from "react";

import { useCourseApi } from "../../../../api/useCourseApi";
import { ICourseDoc } from "../../../../api/useCourseApi/types";
import useAppNavigation from "../../../../lib/useAppNavigation";
import ConfirmDialog, {
  useDialog,
} from "../../../GeneralPurpose/ConfirmDialog";
import ButtonBar, {
  Props as ButtonBarProps,
} from "../../../GeneralPurpose/Buttons/ButtonBar";

interface CourseWithHandlers {
  course: ICourseDoc;
  buttonBarProps: ButtonBarProps;
}

interface ConfirmDeleteData {
  courseId: string;
}

const CoursesTable: FunctionComponent = () => {
  const { courses, deleteCourse } = useCourseApi();
  const {
    nav: { goToAdminCourse },
  } = useAppNavigation();

  const {
    componentProps: confirmDeleteProps,
    showDialog: showDeleteDialog,
  } = useDialog<ConfirmDeleteData>(
    React.useMemo(
      () => ({
        getQuestion: () => "Are you sure you wish to delete this course?",
        getDetails: ({ courseId }) => `Course: ${courseId}`,
        onConfirm: ({ courseId }) => {
          deleteCourse(courseId);
        },
      }),
      [deleteCourse]
    )
  );

  const courseWithHandlers: CourseWithHandlers[] = useMemo(
    () =>
      courses.map((course) => ({
        course,
        buttonBarProps: {
          buttons: [
            {
              text: "Edit",
              styleType: "primary",
              onClick: () => goToAdminCourse(course._id),
            },
            {
              text: "Delete",
              styleType: "danger",
              onClick: () => showDeleteDialog({ courseId: course._id }),
            },
          ],
        },
      })),
    [courses, goToAdminCourse, showDeleteDialog]
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
          {courseWithHandlers.map(({ course, buttonBarProps }) => (
            <tr key={course._id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                <ButtonBar {...buttonBarProps} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CoursesTable;
