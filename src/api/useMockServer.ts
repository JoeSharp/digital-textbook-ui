import * as React from "react";
import { useMockServer as useMockCoursesApi } from "./useCourseApi/useMockServer";
import fetchMock from "fetch-mock";

export default (): boolean => {
  const [isReady, setReady] = React.useState<boolean>(false);

  const { setup: setupCourses, data: dataCourses } = useMockCoursesApi();

  const allData = React.useMemo(
    () => ({
      courses: dataCourses,
    }),
    [dataCourses]
  );

  React.useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupCourses();

    setReady(true);
  }, [allData, setupCourses, setReady]);

  return isReady;
};
