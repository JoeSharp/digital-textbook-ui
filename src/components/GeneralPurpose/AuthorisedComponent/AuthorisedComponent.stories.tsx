import React from "react";
import fetchMock from "fetch-mock";

import { storiesOf } from "@storybook/react";
import AuthorisedComponent from "./AuthorisedComponent";
import {
  IApplicationRoles,
  IUserDoc,
  IUserProfile,
} from "../../../api/useUserApi/types";
import { useAuthenticationContext } from "../../../lib/authentication";

interface Props {
  authorised: boolean;
  alternative?: React.ReactElement<any>;
}

const CONFIGURED_ALTERNATIVE: React.ReactElement = (
  <div>Unauthorised to edit users</div>
);
const REQUIRED_PERMISSION: IApplicationRoles = IApplicationRoles.editUsers;
const AUTHORISED_USER: IUserDoc = {
  emailAddress: "someguy@home.com",
  _id: "1234",
  profile: IUserProfile.teacher,
  authorisations: [IApplicationRoles.study, IApplicationRoles.editUsers],
};
const UNAUTHORISED_USER: IUserDoc = {
  emailAddress: "someguy@home.com",
  _id: "1234",
  profile: IUserProfile.student,
  authorisations: [IApplicationRoles.study],
};

const TestHarness: React.FunctionComponent<Props> = ({
  authorised,
  alternative,
}) => {
  // Setup the appropriate user to be returned by the 'server'
  fetchMock.get("express:/user/me/login", () =>
    authorised ? AUTHORISED_USER : UNAUTHORISED_USER
  );

  // Cause a login to occur, this should put the above test user into the auth context
  const { login } = useAuthenticationContext();
  React.useEffect(() => login("foo"), [login]);

  return (
    <AuthorisedComponent
      requiredRole={REQUIRED_PERMISSION}
      alternative={alternative}
    >
      <h1>This was a protected page</h1>
      <p>If you can see this page, then you are clearly authorised</p>
    </AuthorisedComponent>
  );
};

storiesOf("General Purpose/Authorised Component", module)
  .add("Authorised", () => (
    <TestHarness authorised={true} alternative={CONFIGURED_ALTERNATIVE} />
  ))
  .add("Unauthorised", () => (
    <TestHarness authorised={false} alternative={CONFIGURED_ALTERNATIVE} />
  ))
  .add("Authorised (default alt)", () => <TestHarness authorised={true} />)
  .add("Unauthorised (default alt)", () => <TestHarness authorised={false} />);
