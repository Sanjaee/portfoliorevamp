import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Me } from "./Pages/Me";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
