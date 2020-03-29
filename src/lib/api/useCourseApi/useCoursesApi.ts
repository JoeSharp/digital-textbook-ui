import { useCallback, useState } from "react";

import { CourseType, CourseDocument } from "../../../types";

interface UseCoursesApi {
  getCourses: () => void;
  getCourse: (id: string) => void;
  createCourse: (course: CourseType) => void;
  deleteCourse: (id: string) => void;
  courses: CourseDocument[];
}

const COURSES_RESOURCE = `${process.env.REACT_APP_SERVICE_BASE_URL}/courses`;

const useCoursesApi = (): UseCoursesApi => {
  const [courses, setCourses] = useState<CourseDocument[]>([]);

  const getCourses = useCallback(() => {
    async function fetchData() {
      const response = await fetch(COURSES_RESOURCE);
      const courses = (await response.json()) as CourseDocument[];
      setCourses(courses);
    }

    fetchData();
  }, [setCourses]);

  const getCourse = useCallback(
    (id: string) => {
      async function fetchData() {
        // Find on client side
        const course = courses.find(c => c._id === id);
        if (!course) {
          const response = await fetch(`${COURSES_RESOURCE}/${id}`);
          if (response.status === 200) {
            const course = (await response.json()) as CourseDocument;
            setCourses([course, ...courses]);
          }
        }
      }

      fetchData();
    },
    [courses, setCourses]
  );

  const createCourse = useCallback(
    (course: CourseType) => {
      async function postData() {
        const response = await fetch(COURSES_RESOURCE, {
          method: "POST",
          body: JSON.stringify(course)
        });
        const newCourse = (await response.json()) as CourseDocument;

        // Delete from client side...
        setCourses([...courses, newCourse]);
      }

      postData();
    },
    [courses, setCourses]
  );

  const deleteCourse = useCallback(
    (id: string) => {
      async function deleteData() {
        await fetch(`${COURSES_RESOURCE}/${id}`, {
          method: "DELETE"
        });

        // Delete from client side...
        setCourses(courses.filter(c => c._id !== id));
      }

      deleteData();
    },
    [courses, setCourses]
  );

  return {
    courses,
    getCourses,
    getCourse,
    createCourse,
    deleteCourse
  };
};

export default useCoursesApi;
