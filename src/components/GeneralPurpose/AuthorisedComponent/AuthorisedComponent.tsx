import React from "react";
import { IApplicationRoles } from "../../../api/useUserApi/types";
import { useAuthenticationContext } from "../../../lib/authentication";

interface Props {
  requiredRole: IApplicationRoles;
  alternative?: React.ReactElement<any, any>;
}

const AuthorisedComponent: React.FunctionComponent<Props> = ({
  children,
  requiredRole,
  alternative,
}) => {
  const { currentUser } = useAuthenticationContext();
  const alt = alternative || null;

  if (!currentUser || !children) {
    return alt;
  }

  if (currentUser.authorisations.includes(requiredRole)) {
    return children as React.ReactElement;
  } else {
    return alt;
  }
};

export default AuthorisedComponent;
