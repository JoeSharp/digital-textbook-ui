import React from "react";

import useApi from "./useApi";
import { useErrorReporting } from "../../components/App/ErrorPage";
import { IUserDoc } from "./types";
import useClientSideData from "../useClientSideData";
import { ObjWithStringKey } from "../../lib/useListReducer/types";

interface UseUserApi {
  users: IUserDoc[];
  usersById: ObjWithStringKey<IUserDoc>;
  getUser: (userId: string) => void;
}

const useUserApi = (): UseUserApi => {
  const { reportError } = useErrorReporting();
  const { getUser } = useApi();
  const {
    users: { items: usersById, itemsInList: usersInList, addItem },
  } = useClientSideData();

  const _getUser = React.useCallback(
    (userId: string) => {
      async function f() {
        try {
          const lesson = await getUser(userId);
          addItem(lesson);
        } catch (err) {
          reportError(err);
        }
      }

      f();
    },
    [getUser, addItem, reportError]
  );

  return { users: usersInList, usersById, getUser: _getUser };
};

export default useUserApi;
