import React from "react";

import ModalDialog from "../../../GeneralPurpose/ModalDialog";
import useForm from "../../../../lib/useForm";
import { useCourseLessonsApi } from "../../../../api/useLessonApi";
import { ILesson } from "../../../../api/useLessonApi/types";
import ButtonBar from "../../../GeneralPurpose/Buttons/ButtonBar";
import { Props as ButtonProps } from "../../../GeneralPurpose/Buttons/Button";

interface Props extends ReactModal.Props {
  courseId: string;
  isOpen: boolean;
  onCloseDialog: () => void;
}

const NewLessonDialog: React.FunctionComponent<Props> = (props) => {
  const { courseId, onCloseDialog } = props;
  const { createLesson } = useCourseLessonsApi(courseId);

  const defaultDetails: ILesson = React.useMemo(
    () => ({
      courseId,
      title: "",
      description: "",
    }),
    [courseId]
  );

  const { useTextInput, value } = useForm<ILesson>({
    initialValues: defaultDetails,
  });

  const titleProps = useTextInput("title");
  const descriptionProps = useTextInput("description");

  const buttons: ButtonProps[] = React.useMemo(
    () => [
      {
        text: "Create",
        styleType: "primary",
        onClick: () => {
          createLesson(value);
          onCloseDialog();
        },
      },
      {
        text: "Cancel",
        styleType: "danger",
        onClick: onCloseDialog,
      },
    ],
    [value, createLesson, onCloseDialog]
  );

  return (
    <ModalDialog
      {...props}
      header={<h4>New Lesson</h4>}
      content={
        <form className="form">
          <div className="form-group">
            <label htmlFor="newLessonTitle">Title</label>
            <input
              id="newLessonTitle"
              className="form-control"
              {...titleProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newLessonDescription">Description</label>
            <input
              id="newLessonDescription"
              className="form-control"
              {...descriptionProps}
            />
          </div>
        </form>
      }
      actions={<ButtonBar buttons={buttons} />}
    />
  );
};

interface UseDialog<T> {
  /**
   * The owning component is ready to start a deletion process.
   * Calling this will open the dialog, and setup the UUIDs
   */
  showDialog: () => void;
  /**
   * These are the properties that the owning component can just give to the Dialog component
   * using destructing.
   */
  componentProps: Props;
}

/**
 * This is a React custom hook that sets up things required by the owning component.
 */
export const useDialog = <T extends {}>(courseId: string): UseDialog<T> => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const _onCloseDialog = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  const _showDialog = React.useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    componentProps: {
      courseId,
      isOpen,
      onCloseDialog: _onCloseDialog,
    },
    showDialog: _showDialog,
  };
};

export default NewLessonDialog;
