import { useState, useEffect, useMemo } from "react";
import { useMockServer as useMockCoursesApi } from "./useCourseApi/useMockServer";
import fetchMock from "fetch-mock";

export default (): boolean => {
  const [isReady, setReady] = useState<boolean>(false);

  const { setup: setupCourses, data: dataCourses } = useMockCoursesApi();

  const allData = useMemo(
    () => ({
      courses: dataCourses
    }),
    [dataCourses]
  );

  useEffect(() => {
    console.log("Resetting API With New Data", allData);

    fetchMock.restore();

    setupCourses();

    setReady(true);
  }, [allData, setupCourses, setReady]);

  return isReady;
};
