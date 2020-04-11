import * as React from "react";
import { loremIpsum } from "lorem-ipsum";

import ModalDialog from "../../GeneralPurpose/ModalDialog";
import useForm from "../../../lib/useForm";
import { useCoursesApi } from "../../../api";
import { ICourse } from "../../../types";

interface Props extends ReactModal.Props {
  isOpen: boolean;
  onCloseDialog: () => void;
}

const NewCourseDialog: React.FunctionComponent<Props> = (props) => {
  const { createCourse } = useCoursesApi();

  const defaultDetails: ICourse = React.useMemo(
    () => ({
      name: `New Course ${loremIpsum({ units: "word", count: 2 })}`,
      description: loremIpsum({ units: "word", count: 4 }),
    }),
    []
  );

  const { useTextInput, value } = useForm<ICourse>({
    initialValues: defaultDetails,
  });

  const nameProps = useTextInput("name");
  const descriptionProps = useTextInput("description");

  const { onCloseDialog } = props;

  const onConfirm = React.useCallback(() => {
    createCourse(value);
    onCloseDialog();
  }, [value, createCourse, onCloseDialog]);

  return (
    <ModalDialog
      {...props}
      header={<h4>New Course</h4>}
      content={
        <form>
          <div className="form-group">
            <label htmlFor="newCourseName">Name</label>
            <input id="newCourseName" {...nameProps} />
          </div>
          <div className="form-group">
            <label htmlFor="newCourseDescription">Description</label>
            <input id="newCourseDescription" {...descriptionProps} />
          </div>
        </form>
      }
      actions={
        <React.Fragment>
          <button className="btn btn-primary" onClick={onConfirm}>
            Create
          </button>
          <button className="btn btn-danger" onClick={onCloseDialog}>
            Cancel
          </button>
        </React.Fragment>
      }
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
