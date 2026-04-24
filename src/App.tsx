<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="min-h-screen">
      <header className="p-6">
        <h1 className="text-2xl font-bold">KostureSV</h1>
      </header>
    </div>
  );
}

export default App;
>>>>>>> ce054c6124e2e1e5120587632b5837189e971fc8
