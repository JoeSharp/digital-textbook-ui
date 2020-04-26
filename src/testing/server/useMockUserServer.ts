import React from "react";
import fetchMock from "fetch-mock";

import { IUserDoc } from "../../api/useUserApi/types";
import { MockServer } from "./mockServerUtils";
import { createDocument } from "../data/testDataUtils";

const resource = "express:/user";

const TEST_USER: IUserDoc = createDocument({ emailAddress: "test@monkey.com" });

export const useMockServer = (): MockServer => {
  const setup = React.useCallback(() => {
    fetchMock.get(resource, (url) => {
      return TEST_USER;
    });
  }, []);

  return { setup, data: [TEST_USER] };
};
