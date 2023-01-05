import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Ribbon from "./components/Ribbon";
import HomePage from "./pages/HomePage";
import PokerPage from "./pages/PokerPage";

function App() {
  return (
    <>
      <Ribbon />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poker" element={<PokerPage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
