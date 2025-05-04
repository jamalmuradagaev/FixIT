import { BrowserRouter, Route, Routes } from "react-router";
import WelcomePage from "./pages/WelcomePage.tsx";
import AuthorizationPage from "./pages/AuthorizationPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import RecoveryPage from "./pages/RecoveryPage/index.tsx";
import EnterCode from "./pages/RecoveryPage/EnterCode.tsx";
import ChangePassword from "./pages/RecoveryPage/ChangePassword.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="authorization" element={<AuthorizationPage />}></Route>
        <Route path="registration" element={<RegistrationPage />}></Route>
        <Route path="recovery1" element={<RecoveryPage />}></Route>
        <Route path="recovery2" element={<EnterCode />}></Route>
        <Route path="recovery3" element={<ChangePassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
