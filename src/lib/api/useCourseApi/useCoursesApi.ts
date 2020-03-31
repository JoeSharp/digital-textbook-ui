import { useCallback, useState, useEffect } from "react";

import { CourseType, CourseDocument } from "../../../types";
import useApi from "./useApi";

interface UseCoursesApi {
  createCourse: (course: CourseType) => void;
  deleteCourse: (courseId: string) => void;
  courses: CourseDocument[];
}

const useCoursesApi = (): UseCoursesApi => {
  const { getCourses, createCourse, deleteCourse } = useApi();

  const [courses, setCourses] = useState<CourseDocument[]>([]);

  useEffect(() => {
    async function f() {
      const courses = await getCourses();
      setCourses(courses);
    }

    f();
  }, [setCourses, getCourses]);

  const _createCourse = useCallback(
    (course: CourseType) => {
      async function f() {
        const newCourse = await createCourse(course);

        // Add to client side
        setCourses([...courses, newCourse]);
      }

      f();
    },
    [courses, setCourses, createCourse]
  );

  const _deleteCourse = useCallback(
    (courseId: string) => {
      async function f() {
        await deleteCourse(courseId);
        // Delete from client side...
        setCourses(courses.filter(c => c._id !== courseId));
      }

      f();
    },
    [courses, setCourses, deleteCourse]
  );

  return {
    courses,
    createCourse: _createCourse,
    deleteCourse: _deleteCourse
  };
};

export default useCoursesApi;
