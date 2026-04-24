import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HechoEnSV from "./components/HechoEnSV"; // Importamos la nueva sección

function App() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HechoEnSV /> {/* Mostramos la sección después del Hero */}
    </main>
  );
}

export default App;