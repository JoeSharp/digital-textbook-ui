export const APP_ROLE_ADMIN = "Administrator";
export const APP_ROLE_TEACHER = "Teacher";
export const APP_ROLE_STUDENT = "Student";

export type ApplicationRoleType = "Administrator" | "Teacher" | "Student";
export type OnApplicationRoleSelection = (role: ApplicationRoleType) => void;

export class ApplicationRole {
  type: ApplicationRoleType;
  description: string;

  constructor(type: ApplicationRoleType, description: string) {
    this.type = type;
    this.description = description;
  }
}

export const APPLICATION_ROLES: ApplicationRole[] = [
  new ApplicationRole(APP_ROLE_ADMIN, "Edit Courses, Lessons, Tasks, Users"),
  new ApplicationRole(APP_ROLE_TEACHER, "Setup student groups, mark work"),
  new ApplicationRole(APP_ROLE_STUDENT, "Work on courses"),
];
