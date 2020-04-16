import React from "react";

import useCourseApi from "../../../api/useCourseApi";
import useForm from "../../../lib/useForm";
import { ICourseDoc, ICourse } from "../../../types";
import LessonTable from "./LessonTable";
import NewLessonDialog, { useDialog } from "./NewLessonDialog";

interface Props {
  courseId: string;
}

const EditCourse: React.FunctionComponent<Props> = ({ courseId }) => {
  const { courses, getCourse, updateCourse } = useCourseApi();

  React.useEffect(() => getCourse(courseId), [courseId, getCourse]);

  const course: ICourseDoc | undefined = React.useMemo(
    () => courses.find((c) => c._id === courseId),
    [courseId, courses]
  );

  const { useTextInput, value } = useForm<ICourse>({
    initialValues: course,
  });
  const nameProps = useTextInput("name");
  const descriptionProps = useTextInput("description");

  const { componentProps, showDialog } = useDialog(courseId);

  const onSave = React.useCallback(
    (e) => {
      updateCourse(courseId, { ...course, ...value });
      e.preventDefault();
    },
    [course, value, courseId, updateCourse]
  );

  return (
    <div>
      <div className="form-group">
        <label htmlFor="courseName">Name</label>
        <input className="form-control" {...nameProps} />
      </div>
      <div className="form-group">
        <label htmlFor="courseDescription">Description</label>
        <input className="form-control" {...descriptionProps} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSave}>
        Save
      </button>

      <NewLessonDialog {...componentProps} />
      <button className="btn btn-primary" onClick={showDialog}>
        Add Lesson
      </button>
      <LessonTable courseId={courseId} />
    </div>
  );
};

export default EditCourse;
