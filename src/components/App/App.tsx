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
  const [username, setUsername] = React.useState<string | undefined>();
  const { setIdToken, currentUser } = useAuthenticationContext();

  const responseGoogle = React.useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log(response);

      if (isOnline(response)) {
        setIdToken(response.accessToken);
        setUsername(response.profileObj.name);
      } else if (isOffline(response)) {
        console.log("Offline response");
      }
    },
    [setIdToken, setUsername]
  );

  return (
    <div className="container">
      <NavBar />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={username || "Login"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      {(currentUser && <div>Logged in as {currentUser.emailAddress}</div>) || (
        <div>Not Logged In</div>
      )}

      <Routes />
    </div>
  );
}

export default App;
