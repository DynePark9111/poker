import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Ribbon from "./components/Ribbon";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import PokerPage from "./pages/PokerPage";

function App() {
  return (
    <>
      <Ribbon />
      <Alert />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/poker" element={<PokerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
