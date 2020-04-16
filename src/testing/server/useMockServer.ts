import React from "react";
import { useMockServer as useMockUserServer } from "./useMockUserServer";
import { useMockServer as useMockCourseServer } from "./useMockCourseServer";
import { useMockServer as useMockLessonServer } from "./useMockLessonServer";
import { useMockServer as useMockTaskServer } from "./useMockTaskServer";
import fetchMock from "fetch-mock";

export default (): boolean => {
  const [isReady, setReady] = React.useState<boolean>(false);

  const { setup: setupUsers, data: users } = useMockUserServer();
  const { setup: setupCourses, data: courses } = useMockCourseServer();
  const { setup: setupLessons, data: lessons } = useMockLessonServer();
  const { setup: setupTasks, data: tasks } = useMockTaskServer();

  const allData = React.useMemo(
    () => ({
      courses,
      lessons,
      tasks,
      users,
    }),
    [courses, lessons, tasks, users]
  );

  React.useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupUsers();
    setupCourses();
    setupLessons();
    setupTasks();

    setReady(true);
  }, [allData, setupCourses, setupLessons, setupTasks, setupUsers, setReady]);

  return isReady;
};
