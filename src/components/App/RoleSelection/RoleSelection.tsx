import * as React from "react";

import Card from "../../GeneralPurpose/Card";

import {
  ApplicationRole,
  APPLICATION_ROLES,
  ApplicationRoleType,
} from "./types";

interface Props {
  onRoleSelection: (role: ApplicationRoleType) => void;
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

export default RoleSelection;
