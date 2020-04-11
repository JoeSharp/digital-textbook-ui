import * as React from "react";
import CoursesList from "../CoursesList";
import NewCourseDialog, { useDialog } from "../NewCourseDialog";

const CoursesPage: React.FunctionComponent = () => {
  const { componentProps, showDialog } = useDialog();

  return (
    <div>
      Courses CoursesPage
      <NewCourseDialog {...componentProps} />
      <button className="btn btn-primary" onClick={showDialog}>
        Add Course
      </button>
      <CoursesList />
    </div>
  );
};

export default CoursesPage;
