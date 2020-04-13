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
    nav: { goToStudyCourse },
  } = useAppNavigation();

  const { courses } = useCoursesApi();

  const courseWithHandlers: CourseWithHandlers[] = React.useMemo(
    () =>
      courses.map((course) => ({
        course,
        onClick: () => goToStudyCourse(course._id),
      })),
    [courses, goToStudyCourse]
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
