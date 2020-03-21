import { useCallback, useState } from "react";

interface Course {
  _id: string;
  name: string;
}

interface UseHelloApi {
  getCourses: () => void;
  courses: Course[];
}

const useCoursesApi = (): UseHelloApi => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getCourses = useCallback(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/courses");

      setCourses((await response.json()) as Course[]);
    }

    fetchData();
  }, [setCourses]);

  return {
    courses,
    getCourses
  };
};

export default useCoursesApi;
