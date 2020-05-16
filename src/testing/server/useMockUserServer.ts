import React from "react";
import fetchMock from "fetch-mock";

import {
  IUserDoc,
  IApplicationRoles,
  IUserProfile,
} from "../../api/useUserApi/types";
import { MockServer } from "./mockServerUtils";
import { createDocument } from "../data/testDataUtils";

const resource = "express:/user";

const TEST_USER: IUserDoc = createDocument({
  emailAddress: "test@monkey.com",
  profile: IUserProfile.administrator,
  authorisations: [IApplicationRoles.study],
});

export const useMockServer = (): MockServer => {
  const setup = React.useCallback(() => {
    fetchMock.get(resource, (url) => {
      return TEST_USER;
    });
  }, []);

  return { setup, data: [TEST_USER] };
};
