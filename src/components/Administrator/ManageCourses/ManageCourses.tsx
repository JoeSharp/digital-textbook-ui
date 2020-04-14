import * as React from "react";
import CoursesTable from "./CoursesTable";
import NewCourseDialog, { useDialog } from "./NewCourseDialog";

const CoursesPage: React.FunctionComponent = () => {
  const { componentProps, showDialog } = useDialog();

  return (
    <div>
      <h1>Courses</h1>
      <NewCourseDialog {...componentProps} />
      <button className="btn btn-primary" onClick={showDialog}>
        Add Course
      </button>
      <CoursesTable />
    </div>
  );
};

export default CoursesPage;
