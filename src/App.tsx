import { BrowserRouter, Route, Routes } from "react-router";
import WelcomePage from "./pages/WelcomePage.tsx";
import AuthorizationPage from "./pages/AuthorizationPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="authorization" element={<AuthorizationPage />}></Route>
        <Route path="registration" element={<RegistrationPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
