import * as React from "react";

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
        goToCourse: (courseId: string) => h.push(u.goToCourse(courseId)),
        goToCourses: () => h.push(u.goToCourses()),
      },
    }),
    [h, u]
  );
};

export default useAppNavigation;
