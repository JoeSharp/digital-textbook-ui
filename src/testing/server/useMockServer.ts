import React from "react";
import { useMockServer as useMockMyWorkServer } from "./useMockMyWorkServer";
import { useMockServer as useMockUserServer } from "./useMockUserServer";
import { useMockServer as useMockCourseServer } from "./useMockCourseServer";
import { useMockServer as useMockLessonServer } from "./useMockLessonServer";
import { useMockServer as useMockTaskServer } from "./useMockTaskServer";
import { useMockServer as useMockPrimmChallengeServer } from "./useMockPrimmChallengeServer";
import fetchMock from "fetch-mock";

// Configure fetch mock
fetchMock.config.overwriteRoutes = true;

export default (): boolean => {
  const [isReady, setReady] = React.useState<boolean>(false);

  const { setup: setupMyWork, data: myWork } = useMockMyWorkServer();
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
      myWork,
      courses,
      lessons,
      tasks,
      users,
      challenges,
    }),
    [myWork, courses, lessons, tasks, users, challenges]
  );

  React.useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupMyWork();
    setupUsers();
    setupCourses();
    setupLessons();
    setupTasks();
    setupPrimmChallenges();

    setReady(true);
  }, [
    allData,
    setupMyWork,
    setupCourses,
    setupLessons,
    setupTasks,
    setupUsers,
    setupPrimmChallenges,
    setReady,
  ]);

  return isReady;
};
