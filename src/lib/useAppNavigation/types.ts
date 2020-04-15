export interface RawNavigateApp<IN, OUT> {
  goToRoleSelection: () => OUT;

  goToAdminCourses: () => OUT;
  goToAdminCourse: (courseId: IN) => OUT;

  goToEditLesson: (lessonId: IN) => OUT;
  goToEditTask: (taskId: IN) => OUT;

  goToTeachCourses: () => OUT;
  goToTeachCourse: (courseId: IN) => OUT;

  goToStudyCourses: () => OUT;
  goToStudyCourse: (courseId: IN) => OUT;
}

export interface NavigateApp {
  nav: RawNavigateApp<string, void>;
  urlGenerator: RawNavigateApp<string | undefined, string>;
}
