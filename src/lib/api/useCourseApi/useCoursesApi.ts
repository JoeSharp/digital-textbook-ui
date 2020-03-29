import { useCallback, useState } from "react";

import { CourseType } from "../../../types";

interface UseCoursesApi {
  getCourses: () => void;
  deleteCourse: (id: string) => void;
  courses: CourseType[];
}

const COURSES_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/courses`;

const useCoursesApi = (): UseCoursesApi => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  const getCourses = useCallback(() => {
    async function fetchData() {
      const response = await fetch(COURSES_RESOURCE);

      setCourses((await response.json()) as CourseType[]);
    }

    fetchData();
  }, [setCourses]);

  const deleteCourse = useCallback(
    (id: string) => {
      async function deleteData() {
        await fetch(`${COURSES_RESOURCE}/${id}`, {
          method: "DELETE"
        });

        setCourses(courses.filter(c => c._id !== id));
      }

      deleteData();
    },
    [courses, setCourses]
  );

  return {
    courses,
    getCourses,
    deleteCourse
  };
};

export default useCoursesApi;
