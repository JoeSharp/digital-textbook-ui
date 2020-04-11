export interface RawNavigateApp<IN, OUT> {
  goToAdminCourses: () => OUT;
  goToAdminCourse: (courseId: IN) => OUT;

  goToTeachCourses: () => OUT;
  goToTeachCourse: (courseId: IN) => OUT;

  goToStudyCourses: () => OUT;
  goToStudyCourse: (courseId: IN) => OUT;
}

export interface NavigateApp {
  nav: RawNavigateApp<string, void>;
  urlGenerator: RawNavigateApp<string | undefined, string>;
}
