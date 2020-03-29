import * as React from "react";
import { useEffect, useMemo } from "react";

import useCourseApi from "../../lib/api/useCourseApi";
import { CourseDocument, DEFAULT_COURSE } from "../../types";

interface Props {
  id: string;
}

const EditCourse: React.FunctionComponent<Props> = ({ id }) => {
  const { courses, getCourse } = useCourseApi();

  useEffect(() => getCourse(id), [id, getCourse]);
  const course: CourseDocument = useMemo(
    () => courses.find(c => c._id === id) || { _id: id, ...DEFAULT_COURSE },
    [id, courses]
  );

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={course.name}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
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
