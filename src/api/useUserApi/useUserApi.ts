import React from "react";
import useApi from "./useApi";
import { useAuthenticationContext } from "../../lib/authentication";
import { useErrorReporting } from "../../components/App/ErrorPage";
import { IUserDoc } from "./types";

interface UseUserApi {
  currentUser: IUserDoc | undefined;
}

const useUserApi = (): UseUserApi => {
  const [currentUser, setCurrentUser] = React.useState<IUserDoc>();
  const { reportError } = useErrorReporting();
  const { idToken } = useAuthenticationContext();
  const { getCurrentUser } = useApi();

  React.useEffect(() => {
    async function f() {
      try {
        const currentUser = await getCurrentUser();
        setCurrentUser(currentUser);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [idToken, reportError, setCurrentUser, getCurrentUser]);

  return { currentUser };
};

export default useUserApi;
