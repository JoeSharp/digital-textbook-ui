import * as React from "react";
import { RawNavigateApp } from "./types";

const useUrlGenerator = (): RawNavigateApp<string | undefined, string> => {
  return React.useMemo(
    () => ({
      goToCourse: (courseId: string = ":courseId") => `/course/${courseId}`,
      goToCourses: () => `/course`,
      goToWelcome: () => `/welcome`,
    }),
    []
  );
};

export default useUrlGenerator;
