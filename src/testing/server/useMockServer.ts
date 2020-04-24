import React from "react";
import { useMockServer as useMockUserServer } from "./useMockUserServer";
import { useMockServer as useMockCourseServer } from "./useMockCourseServer";
import { useMockServer as useMockLessonServer } from "./useMockLessonServer";
import { useMockServer as useMockTaskServer } from "./useMockTaskServer";
import { useMockServer as useMockPrimmChallengeServer } from "./useMockPrimmChallengeServer";
import fetchMock from "fetch-mock";

export default (): boolean => {
  const [isReady, setReady] = React.useState<boolean>(false);

  const { setup: setupUsers, data: users } = useMockUserServer();
  const { setup: setupCourses, data: courses } = useMockCourseServer();
  const { setup: setupLessons, data: lessons } = useMockLessonServer();
  const { setup: setupTasks, data: tasks } = useMockTaskServer();
  const {
    setup: setupPrimmChallenges,
    data: challenges,
  } = useMockPrimmChallengeServer();

  const allData = React.useMemo(
    () => ({
      courses,
      lessons,
      tasks,
      users,
      challenges,
    }),
    [courses, lessons, tasks, users, challenges]
  );

  React.useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupUsers();
    setupCourses();
    setupLessons();
    setupTasks();
    setupPrimmChallenges();

    setReady(true);
  }, [
    allData,
    setupCourses,
    setupLessons,
    setupTasks,
    setupUsers,
    setupPrimmChallenges,
    setReady,
  ]);

  return isReady;
};
