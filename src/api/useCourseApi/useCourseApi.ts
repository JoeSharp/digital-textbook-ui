import React from "react";

import { ICourseDoc, ICourse } from "../../types";
import useApi from "./useApi";
import { ObjWithStringKey } from "../../lib/useObjectReducer/types";
import useClientSideData from "../useClientSideData/useClientSideData";
import { useErrorReporting } from "../../lib/ErrorPage";

interface useCourseApi {
  getCourse: (courseId: string) => void;
  refreshCourses: () => void;
  createCourse: (course: ICourse) => void;
  updateCourse: (courseId: string, updates: ICourse) => void;
  deleteCourse: (courseId: string) => void;
  courses: ICourseDoc[];
  coursesById: ObjWithStringKey<ICourseDoc>;
}

const useCourseApi = (): useCourseApi => {
  const { reportError } = useErrorReporting();
  const {
    courses: {
      items: coursesById,
      itemsInList: coursesInList,
      addItem,
      receiveListOfItems,
      removeItem,
    },
  } = useClientSideData();

  const {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  } = useApi();

  const _refreshCourses = React.useCallback(() => {
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

  React.useEffect(_refreshCourses, [_refreshCourses]);

  const _getCourse = React.useCallback(
    (courseId: string) => {
      async function f() {
        try {
          const course = await getCourse(courseId);
          addItem(course);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getCourse, addItem, reportError]
  );

  const _createCourse = React.useCallback(
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

  const _updateCourse = React.useCallback(
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

  const _deleteCourse = React.useCallback(
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
    courses: coursesInList,
    coursesById,
    refreshCourses: _refreshCourses,
    getCourse: _getCourse,
    createCourse: _createCourse,
    updateCourse: _updateCourse,
    deleteCourse: _deleteCourse,
  };
};

export default useCourseApi;
