export interface RawNavigateApp<IN, OUT> {
  goToCourses: () => OUT;
  goToCourse: (courseId: IN) => OUT;
}

export interface NavigateApp {
  nav: RawNavigateApp<string, void>;
  urlGenerator: RawNavigateApp<string | undefined, string>;
}
