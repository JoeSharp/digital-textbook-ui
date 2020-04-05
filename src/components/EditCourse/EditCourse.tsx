import * as React from "react";
import { useEffect, useMemo } from "react";

import useCourseApi from "../../lib/api/useCourseApi";
import { ICourseDoc, DEFAULT_COURSE } from "../../types";

interface Props {
  courseId: string;
}

const EditCourse: React.FunctionComponent<Props> = ({ courseId }) => {
  const { courses, getCourse } = useCourseApi();

  useEffect(() => getCourse(courseId), [courseId, getCourse]);

  const course: ICourseDoc = useMemo(
    () =>
      courses.find((c) => c._id === courseId) || {
        _id: courseId,
        ...DEFAULT_COURSE,
      },
    [courseId, courses]
  );

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="courseName">Name</label>
          <input
            type="text"
            className="form-control"
            id={`editCourseName-${courseId}`}
            aria-describedby="courseNameHelp"
            value={course.name}
          />
          <small id="courseNameHelp" className="form-text text-muted">
            This is the name of your course
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
