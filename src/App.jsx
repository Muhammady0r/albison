import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HonorPage from "./components/HonorPage";
import { useState } from "react";

function App() {
  const [onTop, setOnTop] = useState(false);

  window.addEventListener("scroll", (e) => {
    setOnTop(e.target.documentElement.scrollTop < 5);
  });

  return (
    <div>
      <Header isTop={onTop} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/honor" element={<HonorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
