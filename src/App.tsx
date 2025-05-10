import { BrowserRouter, Route, Routes } from "react-router";
import { useSelector } from "react-redux";

import WelcomePage from "./pages/WelcomePage.tsx";
import AuthorizationPage from "./pages/AuthorizationPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import RecoveryPage from "./pages/RecoveryPage/index.tsx";
import EnterCode from "./pages/RecoveryPage/EnterCode.tsx";
import ChangePassword from "./pages/RecoveryPage/ChangePassword.tsx";
import MainPage from "./pages/MainPage.tsx";
import { RootState } from "./store/store.ts";

function App() {
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized);

  return (
    <BrowserRouter>
      {isAuthorized ?
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes> 
        :
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="authorization" element={<AuthorizationPage />}></Route>
          <Route path="registration" element={<RegistrationPage />}></Route>
          <Route path="recovery1" element={<RecoveryPage />}></Route>
          <Route path="recovery2" element={<EnterCode />}></Route>
          <Route path="recovery3" element={<ChangePassword />}></Route>
        </Routes>
      }
    </BrowserRouter>
  )
}

export default App;
