import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Ribbon from "./components/Ribbon";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Ribbon />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
