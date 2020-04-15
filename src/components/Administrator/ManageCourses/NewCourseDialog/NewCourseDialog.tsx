import React from "react";

import ModalDialog from "../../../GeneralPurpose/ModalDialog";
import useForm from "../../../../lib/useForm";
import { useCoursesApi } from "../../../../api";
import { ICourse } from "../../../../types";
import ButtonBar from "../../../GeneralPurpose/Buttons/ButtonBar";
import { Props as ButtonProps } from "../../../GeneralPurpose/Buttons/Button";

interface Props extends ReactModal.Props {
  isOpen: boolean;
  onCloseDialog: () => void;
}

const NewCourseDialog: React.FunctionComponent<Props> = (props) => {
  const { createCourse } = useCoursesApi();

  const defaultDetails: ICourse = React.useMemo(
    () => ({
      name: "",
      description: "",
    }),
    []
  );

  const { useTextInput, value } = useForm<ICourse>({
    initialValues: defaultDetails,
  });

  const nameProps = useTextInput("name");
  const descriptionProps = useTextInput("description");

  const { onCloseDialog } = props;

  const buttons: ButtonProps[] = React.useMemo(
    () => [
      {
        text: "Create",
        styleType: "primary",
        onClick: () => {
          createCourse(value);
          onCloseDialog();
        },
      },
      {
        text: "Cancel",
        styleType: "danger",
        onClick: onCloseDialog,
      },
    ],
    [value, createCourse, onCloseDialog]
  );

  return (
    <ModalDialog
      {...props}
      header={<h4>New Course</h4>}
      content={
        <form className="form">
          <div className="form-group">
            <label htmlFor="newCourseName">Name</label>
            <input id="newCourseName" className="form-control" {...nameProps} />
          </div>
          <div className="form-group">
            <label htmlFor="newCourseDescription">Description</label>
            <input
              id="newCourseDescription"
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
export const useDialog = <T extends {}>(): UseDialog<T> => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const _onCloseDialog = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  const _showDialog = React.useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    componentProps: {
      isOpen,
      onCloseDialog: _onCloseDialog,
    },
    showDialog: _showDialog,
  };
};

export default NewCourseDialog;
