import React from "react";
import { useMockServer as useMockCoursesApi } from "./useMockCourseServer";
import { useMockServer as useMockLessonApi } from "./useMockLessonServer";
import { useMockServer as useMockTaskApi } from "./useMockTaskServer";
import fetchMock from "fetch-mock";

export default (): boolean => {
  const [isReady, setReady] = React.useState<boolean>(false);

  const { setup: setupCourses, data: dataCourses } = useMockCoursesApi();
  const { setup: setupLessons, data: dataLessons } = useMockLessonApi();
  const { setup: setupTasks, data: dataTasks } = useMockTaskApi();

  const allData = React.useMemo(
    () => ({
      courses: dataCourses,
      lessons: dataLessons,
      tasks: dataTasks,
    }),
    [dataCourses, dataLessons, dataTasks]
  );

  React.useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupCourses();
    setupLessons();
    setupTasks();

    setReady(true);
  }, [allData, setupCourses, setupLessons, setupTasks, setReady]);

  return isReady;
};
