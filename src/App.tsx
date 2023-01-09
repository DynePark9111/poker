import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import AuthLayout from "./components/auth/AuthLayout";
import Ribbon from "./components/Ribbon";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import PokerPage from "./pages/PokerPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <>
      <Ribbon />
      <Alert />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="my" element={<MyPage />} />
        <Route path="poker" element={<PokerPage />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
