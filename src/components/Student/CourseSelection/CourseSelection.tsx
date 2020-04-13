import * as React from "react";
import { useCoursesApi } from "../../../api";
import Card from "../../GeneralPurpose/Card";
import { ICourseDoc } from "../../../types";
import useAppNavigation from "../../../lib/useAppNavigation";

interface CourseWithHandlers {
  course: ICourseDoc;
  onClick: () => void;
}

const CourseSelection: React.FunctionComponent = () => {
  const {
    nav: { goToAdminCourse },
  } = useAppNavigation();

  const { courses } = useCoursesApi();

  const courseWithHandlers: CourseWithHandlers[] = React.useMemo(
    () =>
      courses.map((course) => ({
        course,
        onClick: () => goToAdminCourse(course._id),
      })),
    [courses, goToAdminCourse]
  );

  return (
    <div>
      {courseWithHandlers.map(({ course, onClick }) => (
        <Card
          key={course._id}
          title={course.name}
          text={course.description}
          buttonProps={{ text: "Select", styleType: "primary", onClick }}
        />
      ))}
    </div>
  );
};

export default CourseSelection;
