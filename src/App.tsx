import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HechoEnSV from "./components/HechoEnSV";
import Accesorios from "./components/Accesorios";
import TelasArtesanales from "./components/TelasArtesanales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <HechoEnSV />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/telas" element={<TelasArtesanales />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
