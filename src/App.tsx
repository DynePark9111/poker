import { Route, Routes } from "react-router-dom";
import Ribbon from "./components/Ribbon";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import PokerPage from "./pages/PokerPage";

function App() {
  return (
    <>
      <Ribbon />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/poker" element={<PokerPage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
