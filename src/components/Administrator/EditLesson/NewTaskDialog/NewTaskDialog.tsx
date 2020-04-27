import React from "react";

import ModalDialog from "../../../GeneralPurpose/ModalDialog";
import useForm from "../../../../lib/useForm";
import { useLessonTasksApi } from "../../../../api/useTaskApi";
import { IEmbeddedIframeSystem } from "../../../../api/useEmbeddedIframeApi/types";
import { ITask, ITaskType } from "../../../../api/useTaskApi/types";
import ButtonBar from "../../../GeneralPurpose/Buttons/ButtonBar";
import { Props as ButtonProps } from "../../../GeneralPurpose/Buttons/Button";

interface Props extends ReactModal.Props {
  lessonId: string;
  isOpen: boolean;
  onCloseDialog: () => void;
}

const NewTaskDialog: React.FunctionComponent<Props> = (props) => {
  const { lessonId, onCloseDialog } = props;
  const { createTask } = useLessonTasksApi(lessonId);

  const defaultDetails: ITask = React.useMemo(
    () => ({
      lessonId,
      type: ITaskType.EmbeddedIframe,
      title: "",
      instruction: "",
      videoLink: "",
      iframe: {
        system: IEmbeddedIframeSystem.gitHubGist,
        gistId: "",
      },
    }),
    [lessonId]
  );

  const { useTextInput, value } = useForm<ITask>({
    initialValues: defaultDetails,
  });

  const titleProps = useTextInput("title");
  const instructionProps = useTextInput("instruction");

  const buttons: ButtonProps[] = React.useMemo(
    () => [
      {
        text: "Create",
        styleType: "primary",
        onClick: () => {
          createTask(value);
          onCloseDialog();
        },
      },
      {
        text: "Cancel",
        styleType: "danger",
        onClick: onCloseDialog,
      },
    ],
    [value, createTask, onCloseDialog]
  );

  return (
    <ModalDialog
      {...props}
      header={<h4>New Task</h4>}
      content={
        <form className="form">
          <div className="form-group">
            <label htmlFor="newTaskTitle">Title</label>
            <input id="newTaskTitle" className="form-control" {...titleProps} />
          </div>
          <div className="form-group">
            <label htmlFor="newTaskInstruction">Instruction</label>
            <input
              id="newTaskInstruction"
              className="form-control"
              {...instructionProps}
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
export const useDialog = <T extends {}>(lessonId: string): UseDialog<T> => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const _onCloseDialog = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  const _showDialog = React.useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    componentProps: {
      lessonId,
      isOpen,
      onCloseDialog: _onCloseDialog,
    },
    showDialog: _showDialog,
  };
};

export default NewTaskDialog;
