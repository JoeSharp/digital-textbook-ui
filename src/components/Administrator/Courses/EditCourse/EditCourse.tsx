import * as React from "react";

import useCourseApi from "../../../../api/useCourseApi";
import useForm from "../../../../lib/useForm";
import { ICourseDoc, DEFAULT_COURSE, ICourse } from "../../../../types";

interface Props {
  courseId: string;
}

const EditCourse: React.FunctionComponent<Props> = ({ courseId }) => {
  const { courses, getCourse, updateCourse } = useCourseApi();

  React.useEffect(() => getCourse(courseId), [courseId, getCourse]);

  const course: ICourseDoc = React.useMemo(
    () =>
      courses.find((c) => c._id === courseId) || {
        _id: courseId,
        ...DEFAULT_COURSE,
      },
    [courseId, courses]
  );

  const { useTextInput, value } = useForm<ICourse>({
    initialValues: course,
  });
  const nameProps = useTextInput("name");
  const descriptionProps = useTextInput("description");

  const onSave = React.useCallback(
    (e) => {
      updateCourse(courseId, { ...course, ...value });
      e.preventDefault();
    },
    [course, value, courseId, updateCourse]
  );

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="courseName">Name</label>
          <input {...nameProps} />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Description</label>
          <input {...descriptionProps} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
