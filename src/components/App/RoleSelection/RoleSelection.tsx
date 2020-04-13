import * as React from "react";

import Card from "../../GeneralPurpose/Card";

import {
  ApplicationRole,
  APPLICATION_ROLES,
  OnApplicationRoleSelection,
} from "./types";
import useAppNavigation from "../../../lib/useAppNavigation";

interface Props {
  onRoleSelection: OnApplicationRoleSelection;
}

interface RoleWithHandler {
  appRole: ApplicationRole;
  onClick: () => void;
}

const RoleSelection: React.FunctionComponent<Props> = ({ onRoleSelection }) => {
  const roleWithHandlers: RoleWithHandler[] = React.useMemo(
    () =>
      APPLICATION_ROLES.map((appRole) => ({
        appRole,
        onClick: () => onRoleSelection(appRole.type),
      })),
    [onRoleSelection]
  );

  return (
    <div className="row">
      {roleWithHandlers.map(({ appRole: { type, description }, onClick }) => (
        <div className="col-sm-4">
          <Card
            title={type}
            text={description}
            buttonProps={{ text: "Select", styleType: "light", onClick }}
          />
        </div>
      ))}
    </div>
  );
};

const RoleSelectionWithNav: React.FunctionComponent = () => {
  const {
    nav: { goToAdminCourses, goToStudyCourses, goToTeachCourses },
  } = useAppNavigation();

  const onRoleSelection: OnApplicationRoleSelection = React.useCallback(
    (applicationRole) => {
      const rolePages = {
        Administrator: goToAdminCourses,
        Teacher: goToTeachCourses,
        Student: goToStudyCourses,
      };

      rolePages[applicationRole]();
    },
    [goToAdminCourses, goToStudyCourses, goToTeachCourses]
  );

  return <RoleSelection onRoleSelection={onRoleSelection} />;
};

export { RoleSelectionWithNav };

export default RoleSelection;
