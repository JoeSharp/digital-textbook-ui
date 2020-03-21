import React from "react";
import { useCallback, useState } from "react";
import Header from "./components/Header";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";

const GOOGLE_CLIENT_ID =
  "685048422867-m7m7shdedhcf8qqm495o1k5rdv45ec04.apps.googleusercontent.com";

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
        clientId={GOOGLE_CLIENT_ID}
        buttonText={username || "Login"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default App;
