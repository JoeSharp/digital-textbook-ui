import React from "react";
import { useCallback, useState } from "react";
import Header from "./components/Header";
import CoursesList from "./components/CoursesList";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

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
      <CoursesList />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
