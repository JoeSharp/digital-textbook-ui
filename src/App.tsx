import React from "react";
import { useCallback, useState } from "react";
import Header from "./components/Header";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import Routes from "./Routes";

const tg = (tbd: any): tbd is GoogleLoginResponse => {
  if ((tbd as GoogleLoginResponse).profileObj) {
    return true;
  }
  return false;
};

function App() {
  const [username, setUsername] = useState<string | undefined>();

  const responseGoogle = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log(response);
      if (tg(response)) {
        setUsername(response.profileObj.name);
      }
    },
    []
  );

  return (
    <div>
      <Header />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={username || "Login"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      <Routes />
    </div>
  );
}

export default App;
