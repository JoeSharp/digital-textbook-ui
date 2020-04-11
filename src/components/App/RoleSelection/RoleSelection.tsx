import * as React from "react";

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
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{type}</h5>
              <p className="card-text">{description}</p>
              <button className="card-link" onClick={onClick}>
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleSelection;
