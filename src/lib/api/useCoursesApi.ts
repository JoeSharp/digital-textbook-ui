import { useCallback, useState } from "react";

import { CourseType } from "../../types";

interface UseCoursesApi {
  getCourses: () => void;
  courses: CourseType[];
}

const useCoursesApi = (): UseCoursesApi => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  const getCourses = useCallback(() => {
    async function fetchData() {
      const response = await fetch(
        process.env.REACT_APP_SERVICE_BASE_URL + "/courses"
      );

      setCourses((await response.json()) as CourseType[]);
    }

    fetchData();
  }, [setCourses]);

  return {
    courses,
    getCourses
  };
};

export default useCoursesApi;
