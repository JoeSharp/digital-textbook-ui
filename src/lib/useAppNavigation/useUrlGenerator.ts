import React from "react";
import { RawNavigateApp } from "./types";

import {
  APP_ROLE_ADMIN,
  APP_ROLE_TEACHER,
  APP_ROLE_STUDENT,
} from "../../components/App/RoleSelection/types";

const useUrlGenerator = (): RawNavigateApp<string | undefined, string> => {
  return React.useMemo(
    () => ({
      goToRoleSelection: () => "/",
      goToAdminCourse: (courseId: string = ":courseId") =>
        `/${APP_ROLE_ADMIN}/course/${courseId}`,
      goToAdminCourses: () => `/${APP_ROLE_ADMIN}/course`,

      goToEditLesson: (lessonId: string = ":lessonId") =>
        `/${APP_ROLE_ADMIN}/lesson/${lessonId}`,
      goToEditTask: (taskId: string = ":taskId") =>
        `/${APP_ROLE_ADMIN}/task/${taskId}`,

      goToTeachCourse: (courseId: string = ":courseId") =>
        `/${APP_ROLE_TEACHER}/course/${courseId}`,
      goToTeachCourses: () => `/${APP_ROLE_TEACHER}/course`,

      goToStudyCourse: (courseId: string = ":courseId") =>
        `/${APP_ROLE_STUDENT}/course/${courseId}`,
      goToStudyCourses: () => `/${APP_ROLE_STUDENT}/course`,

      goToChoosePrimmChallenges: () => `/${APP_ROLE_STUDENT}/primm`,
      goToAttemptPrimmChallenge: (challengeId: string = ":challengeId") =>
        `/${APP_ROLE_STUDENT}/primm/${challengeId}`,
    }),
    []
  );
};

export default useUrlGenerator;
