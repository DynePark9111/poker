import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import AuthLayout from "./components/layout/AuthLayout";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import PokerPage from "./pages/PokerPage";
import SignupPage from "./pages/auth/SignupPage";
import Layout from "./components/layout/Layout";
import { useContext } from "react";
import { darkmodeContext } from "./contexts/DarkmodeContext";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const { isDark } = useContext(darkmodeContext);
  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Alert />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="my" element={<MyPage />} />
          <Route path="poker" element={<PokerPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}
