import React from "react";
import NavBar from "./NavBar";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import Routes from "./Routes";
import { useAuthenticationContext } from "../../lib/authentication";

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
  const { currentUser, login } = useAuthenticationContext();

  const responseGoogle = React.useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log("Google Login Done");
      console.log(response);

      if (isOnline(response)) {
        login(response.getAuthResponse().id_token);
      } else if (isOffline(response)) {
        console.log("Offline response");
      }
    },
    [login]
  );

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
      {(currentUser && <div>Logged in as {currentUser.emailAddress}</div>) || (
        <div>Not Logged In</div>
      )}

      {currentUser && (
        <React.Fragment>
          <NavBar />
          <Routes />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
