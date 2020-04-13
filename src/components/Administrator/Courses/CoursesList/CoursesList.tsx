import * as React from "react";

import { FunctionComponent, useMemo } from "react";

import { useCoursesApi } from "../../../../api";
import { ICourseDoc } from "../../../../types";
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

const CoursesList: FunctionComponent = () => {
  const { courses, deleteCourse } = useCoursesApi();
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

export default CoursesList;
