import React from "react";
import { useLessonTasksApi } from "../../../../api/useTaskApi";
import { ITaskDoc } from "../../../../types";
import ConfirmDialog, {
  useDialog,
} from "../../../GeneralPurpose/ConfirmDialog";
import ButtonBar, {
  Props as ButtonBarProps,
} from "../../../GeneralPurpose/Buttons/ButtonBar";
import useAppNavigation from "../../../../lib/useAppNavigation";

interface Props {
  lessonId: string;
}

interface TaskWithHandlers {
  task: ITaskDoc;
  buttonBarProps: ButtonBarProps;
}

interface ConfirmDeleteData {
  taskId: string;
}

const TaskTable: React.FunctionComponent<Props> = ({ lessonId }) => {
  const { tasks, deleteTask } = useLessonTasksApi(lessonId);
  const {
    nav: { goToEditTask },
  } = useAppNavigation();

  const {
    componentProps: confirmDeleteProps,
    showDialog: showDeleteDialog,
  } = useDialog<ConfirmDeleteData>(
    React.useMemo(
      () => ({
        getQuestion: () => "Are you sure you wish to delete this task?",
        getDetails: ({ taskId }) => `Task: ${taskId}`,
        onConfirm: ({ taskId }) => {
          deleteTask(taskId);
        },
      }),
      [deleteTask]
    )
  );

  const tasksWithHandlers: TaskWithHandlers[] = React.useMemo(
    () =>
      tasks.map((task) => ({
        task,
        buttonBarProps: {
          buttons: [
            {
              text: "Edit",
              styleType: "primary",
              onClick: () => goToEditTask(task._id),
            },
            {
              text: "Delete",
              styleType: "danger",
              onClick: () => showDeleteDialog({ taskId: task._id }),
            },
          ],
        },
      })),
    [tasks, goToEditTask, showDeleteDialog]
  );

  return (
    <React.Fragment>
      <ConfirmDialog {...confirmDeleteProps} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Instruction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksWithHandlers.map(({ task, buttonBarProps }) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.instruction}</td>
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
