import React from "react";
import NavBar from "./NavBar";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogout,
} from "react-google-login";

import Routes from "./Routes";
import { useAuthenticationContext } from "../../lib/authentication";
import { IApplicationRoles } from "../../api/useUserApi/types";
import AuthorisedComponent from "../GeneralPurpose/AuthorisedComponent";

const isOnline = (tbd: any): tbd is GoogleLoginResponse => {
  if ((tbd as GoogleLoginResponse).profileObj) {
    return true;
  }
  return false;
};

const isOffline = (tbd: any): tbd is GoogleLoginResponseOffline => {
  if ((tbd as GoogleLoginResponseOffline).code) {
    return true;
  }
  return false;
};

function App() {
  const { currentUser, onLogin, onLogout } = useAuthenticationContext();

  const responseGoogle = React.useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if (isOnline(response)) {
        onLogin(response.getAuthResponse().id_token);
      } else if (isOffline(response)) {
        console.log("Offline response");
      }
    },
    [onLogin]
  );
  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    onLogoutSuccess: onLogout,
  });

  return (
    <div className="container">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={currentUser ? currentUser.emailAddress : "Login"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      {(currentUser && (
        <div>
          Logged in as {currentUser.emailAddress}
          <button onClick={signOut}>Logout</button>
        </div>
      )) || <div>Not Logged In</div>}

      <AuthorisedComponent requiredRole={IApplicationRoles.viewContent}>
        <NavBar />
        <Routes />
      </AuthorisedComponent>
    </div>
  );
}

export default App;
