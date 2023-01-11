import { Route, Routes } from "react-router-dom";
import { lazy, useContext, Suspense } from "react";
import { DarkmodeContext } from "./contexts/DarkmodeContext";
import Alert from "./components/Alert";
import Layout from "./components/layout/Layout";
import AuthLayout from "./components/layout/AuthLayout";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/auth/AuthPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
const PokerPage = lazy(() => import("./pages/PokerPage"));

export default function App() {
  const { isDark } = useContext(DarkmodeContext);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Suspense fallback={<Layout />}>
        <Alert />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="my" element={<MyPage />} />
            <Route path="poker" element={<PokerPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
