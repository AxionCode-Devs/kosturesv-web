import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CategoriasDestacadas from "./components/CategoriasDestacadas";
import HechoEnSV from "./components/HechoEnSV";
import CallToAction from "./components/CallToAction";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Accesorios from "./components/Accesorios";
import TelasArtesanales from "./components/TelasArtesanales";
import Catalogo from "./components/Catalogo";
import CategoryView from "./components/CategoryView";
import Tiendas from "./components/Tiendas";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <CategoriasDestacadas />
      <HechoEnSV />
      <CallToAction />
      <Ubicacion />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <main className="w-full min-h-screen bg-[#FFFDF9] relative">

        {/* TEXTURA EDITORIAL (Noise Overlay invisible a clicks) */}
        <div 
          className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.04] mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:categoriaSlug" element={<CategoryView />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/telas" element={<TelasArtesanales />} />
          <Route path="/tiendas" element={<Tiendas />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </main>
    </Router>
    </LanguageProvider>
  );
}

export default App;
