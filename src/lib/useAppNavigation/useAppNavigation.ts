import React from "react";

import { NavigateApp } from "./types";
import useRouter from "./useRouter";
import useUrlGenerator from "./useUrlGenerator";

const useAppNavigation = (): NavigateApp => {
  const { history: h } = useRouter();
  const u = useUrlGenerator(); // just to make all the following rote lines short
  return React.useMemo(
    () => ({
      urlGenerator: u,
      nav: {
        goToRoleSelection: () => h.push(u.goToRoleSelection()),
        goToAdminCourse: (courseId: string) =>
          h.push(u.goToAdminCourse(courseId)),
        goToAdminCourses: () => h.push(u.goToAdminCourses()),

        goToEditTask: (taskId: string) => h.push(u.goToEditTask(taskId)),
        goToEditLesson: (lessonId: string) =>
          h.push(u.goToEditLesson(lessonId)),

        goToTeachCourse: (courseId: string) =>
          h.push(u.goToTeachCourse(courseId)),
        goToTeachCourses: () => h.push(u.goToTeachCourses()),

        goToStudyCourse: (courseId: string) =>
          h.push(u.goToStudyCourse(courseId)),
        goToStudyCourses: () => h.push(u.goToStudyCourses()),
      },
    }),
    [h, u]
  );
};

export default useAppNavigation;
