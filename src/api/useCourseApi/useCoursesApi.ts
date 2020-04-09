import { useCallback, useEffect } from "react";

import { ICourseDoc, ICourse } from "../../types";
import useApi from "./useApi";
import useObjectReducer, {
  ObjWithStringKey,
} from "../../lib/useObjectReducer/useObjectReducer";
import { useErrorReporting } from "../../lib/ErrorPage";

interface UseCoursesApi {
  getCourse: (courseId: string) => void;
  createCourse: (course: ICourse) => void;
  updateCourse: (courseId: string, updates: ICourse) => void;
  deleteCourse: (courseId: string) => void;
  courses: ICourseDoc[];
  coursesById: ObjWithStringKey<ICourseDoc>;
}

const useCoursesApi = (): UseCoursesApi => {
  const { reportError } = useErrorReporting();

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
      try {
        const courses = await getCourses();
        receiveListOfItems(courses);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [receiveListOfItems, getCourses, reportError]);

  const _getCourse = useCallback(
    (courseId: string) => {
      let course = undefined;
      async function f() {
        try {
          course = await getCourse(courseId);
          return course;
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getCourse, reportError]
  );

  const _createCourse = useCallback(
    (course: ICourse) => {
      async function f() {
        try {
          const newCourse = await createCourse(course);
          addItem(newCourse);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [addItem, createCourse, reportError]
  );

  const _updateCourse = useCallback(
    (courseId: string, updates: ICourse) => {
      async function f() {
        try {
          console.log("updating course", updates);
          const updatedCourse = await updateCourse(courseId, updates);
          console.log("UPDATED", updatedCourse);
          addItem(updatedCourse);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [addItem, updateCourse, reportError]
  );

  const _deleteCourse = useCallback(
    (courseId: string) => {
      async function f() {
        try {
          await deleteCourse(courseId);
          removeItem(courseId);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [removeItem, deleteCourse, reportError]
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
