import { useCallback, useEffect } from "react";

import { ICourseDoc, ICourse } from "../../../types";
import useApi from "./useApi";
import useObjectReducer from "../../useObjectReducer";
import { ObjWithStringKey } from "../../useObjectReducer/useObjectReducer";

interface UseCoursesApi {
  getCourse: (courseId: string) => void;
  createCourse: (course: ICourse) => void;
  deleteCourse: (courseId: string) => void;
  courses: ICourseDoc[];
  coursesById: ObjWithStringKey<ICourseDoc>;
}

const useCoursesApi = (): UseCoursesApi => {
  const { getCourses, getCourse, createCourse, deleteCourse } = useApi();

  const {
    items: coursesById,
    itemsInList: courses,
    addItem,
    receiveListOfItems,
    removeItem,
  } = useObjectReducer<ICourseDoc>((course) => course._id, {});

  useEffect(() => {
    async function f() {
      const courses = await getCourses();
      if (!!courses) {
        receiveListOfItems(courses);
      }
    }

    f();
  }, [receiveListOfItems, getCourses]);

  const _getCourse = useCallback(
    (courseId: string) => {
      let course = undefined;
      async function f() {
        course = await getCourse(courseId);
        return course;
      }

      f();
    },
    [getCourse]
  );

  const _createCourse = useCallback(
    (course: ICourse) => {
      async function f() {
        const newCourse = await createCourse(course);
        addItem(newCourse);
      }

      f();
    },
    [addItem, createCourse]
  );

  const _deleteCourse = useCallback(
    (courseId: string) => {
      async function f() {
        await deleteCourse(courseId);
        removeItem(courseId);
      }

      f();
    },
    [removeItem, deleteCourse]
  );

  return {
    courses,
    coursesById,
    getCourse: _getCourse,
    createCourse: _createCourse,
    deleteCourse: _deleteCourse,
  };
};

export default useCoursesApi;
