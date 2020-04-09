import { useCallback, useEffect } from "react";

import { ICourseDoc, ICourse } from "../../types";
import useApi from "./useApi";
import useObjectReducer, {
  ObjWithStringKey,
} from "../../lib/useObjectReducer/useObjectReducer";

interface UseCoursesApi {
  getCourse: (courseId: string) => void;
  createCourse: (course: ICourse) => void;
  updateCourse: (courseId: string, updates: ICourse) => void;
  deleteCourse: (courseId: string) => void;
  courses: ICourseDoc[];
  coursesById: ObjWithStringKey<ICourseDoc>;
}

const useCoursesApi = (): UseCoursesApi => {
  const {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  } = useApi();

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

  const _updateCourse = useCallback(
    (courseId: string, updates: ICourse) => {
      async function f() {
        try {
          const updatedCourse = await updateCourse(courseId, updates);
          addItem(updatedCourse);
        } catch (e) {
          console.log(e);
        }
      }

      f();
    },
    [addItem, updateCourse]
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
    updateCourse: _updateCourse,
    deleteCourse: _deleteCourse,
  };
};

export default useCoursesApi;
