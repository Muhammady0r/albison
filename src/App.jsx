import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HonorPage from "./components/HonorPage";

function App() {
  return (
    <div
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/honor" element={<HonorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
