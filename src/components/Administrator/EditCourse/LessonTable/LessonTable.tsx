import React from "react";
import { useCourseLessonsApi } from "../../../../api/useLessonApi";
import { ILessonDoc } from "../../../../api/useLessonApi/types";
import ConfirmDialog, {
  useDialog,
} from "../../../GeneralPurpose/ConfirmDialog";
import ButtonBar, {
  Props as ButtonBarProps,
} from "../../../GeneralPurpose/Buttons/ButtonBar";
import useAppNavigation from "../../../../lib/useAppNavigation";

interface Props {
  courseId: string;
}

interface LessonWithHandlers {
  lesson: ILessonDoc;
  buttonBarProps: ButtonBarProps;
}

interface ConfirmDeleteData {
  lessonId: string;
}

const TaskTable: React.FunctionComponent<Props> = ({ courseId }) => {
  const { lessons, deleteLesson } = useCourseLessonsApi(courseId);
  const {
    nav: { goToEditLesson },
  } = useAppNavigation();

  const {
    componentProps: confirmDeleteProps,
    showDialog: showDeleteDialog,
  } = useDialog<ConfirmDeleteData>(
    React.useMemo(
      () => ({
        getQuestion: () => "Are you sure you wish to delete this lesson?",
        getDetails: ({ lessonId }) => `Lesson: ${lessonId}`,
        onConfirm: ({ lessonId }) => {
          deleteLesson(lessonId);
        },
      }),
      [deleteLesson]
    )
  );

  const lessonsWithHandlers: LessonWithHandlers[] = React.useMemo(
    () =>
      lessons.map((lesson) => ({
        lesson,
        buttonBarProps: {
          buttons: [
            {
              text: "Edit",
              styleType: "primary",
              onClick: () => goToEditLesson(lesson._id),
            },
            {
              text: "Delete",
              styleType: "danger",
              onClick: () => showDeleteDialog({ lessonId: lesson._id }),
            },
          ],
        },
      })),
    [lessons, goToEditLesson, showDeleteDialog]
  );

  return (
    <React.Fragment>
      <ConfirmDialog {...confirmDeleteProps} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessonsWithHandlers.map(({ lesson, buttonBarProps }) => (
            <tr key={lesson._id}>
              <td>{lesson.title}</td>
              <td>{lesson.description}</td>
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

export default TaskTable;
