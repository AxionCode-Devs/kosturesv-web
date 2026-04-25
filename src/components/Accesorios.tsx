import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import monederosBanner from "../assets/monederos-banner.jpg";

// 1. DEFINICIÓN DE INTERFAZ (Tipado para nuestra arquitectura)
export interface Accesorio {
  codigo: string;
  nombre: string;
  medidas: string;
  imagen: string;
  categoria: "Monederos" | "Cosmetiqueras" | "Estuches"; // Restringimos los valores posibles
}

// 2. DATOS CON CATEGORÍAS
const accesorios: Accesorio[] = [
  {
    codigo: "K001MNP",
    nombre: "Monedero Pequeño",
    medidas: "8 x 10 cm",
    imagen: "/imagenes/productos/K001MNP.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K0440CC",
    nombre: "Monedero Mediano",
    medidas: "12 x 11 cm",
    imagen: "/imagenes/productos/K0440CC.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K043OPP",
    nombre: "Monedero Orígenes",
    medidas: "11 x 10 cm",
    imagen: "/imagenes/productos/K043OPP.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K002CQ",
    nombre: "Cosmetiquera",
    medidas: "16 x 25 cm, base 5 cm",
    imagen: "/imagenes/productos/K002CQ.jpg",
    categoria: "Cosmetiqueras",
  },
  {
    codigo: "K030CEL",
    nombre: "Estuche Celular",
    medidas: "14 x 21 cm",
    imagen: "/imagenes/productos/K030CEL.jpg",
    categoria: "Estuches",
  },
];

// Lista de filtros para nuestros botones (Pestañas)
const categoriasFiltro = ["Todos", "Monederos", "Cosmetiqueras", "Estuches"];

// Diccionario de Arquitectura: Conecta cada filtro con su experiencia visual
const informacionBanner: Record<string, { titulo: string; imagen: string }> = {
  Todos: {
    titulo: "Colección Accesorios",
    imagen: "/imagenes/accesorios-banner.jpg",
  },
  Monederos: {
    titulo: "Monederos",
    imagen: monederosBanner,
  },
  Cosmetiqueras: {
    titulo: "Cosmetiqueras",
    imagen: "/imagenes/cosmetiqueras-banner.jpg",
  },
  Estuches: {
    titulo: "Estuches",
    imagen: "/imagenes/estuches-banner.jpg",
  },
};

const Accesorios: React.FC = () => {
  // 1. Interceptamos la información de la ruta que viene desde la página principal
  const location = useLocation();

  // 2. Extraemos el filtro oculto. Si no viene nada, usamos "Todos" por defecto.
  const categoriaInicial = location.state?.filtroDeseado || "Todos";

  // 3. ESTADO DEL COMPONENTE (Ahora inicia con la categoría que interceptamos)
  const [filtroActivo, setFiltroActivo] = useState<string>(categoriaInicial);

  // 4. SCROLL AL INICIO (Para que el usuario siempre vea el banner principal att hector)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, filtroActivo]);

  // 5. LÓGICA DE FILTRADO
  const accesoriosFiltrados = accesorios.filter(
    (item) => filtroActivo === "Todos" || item.categoria === filtroActivo,
  );

  return (
    <section
      id="accesorios"
      className="bg-[#FAF8F5] min-h-screen font-sans pb-20"
    >
      {/* IMAGEN DE CABECERA (BANNER DINÁMICO) */}
      <div className="relative w-full h-64 md:h-96 bg-[#2A3B4C] overflow-hidden">
        {/* El atributo key hace que React recree la imagen al cambiar de filtro, permitiendo que la animación se dispare */}
        <img
          key={filtroActivo}
          src={
            informacionBanner[filtroActivo]?.imagen ||
            informacionBanner["Todos"].imagen
          }
          alt={informacionBanner[filtroActivo]?.titulo || "Accesorios Kosture"}
          className="w-full h-full object-cover opacity-60 animate-[fadeIn_0.5s_ease-in-out]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            key={`${filtroActivo}-title`}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-md uppercase mb-4 animate-[slideDown_0.5s_ease-out]"
          >
            {informacionBanner[filtroActivo]?.titulo || "Colección Accesorios"}
          </h1>
          <div className="h-1 w-32 bg-[#D28C56] rounded-full"></div>
        </div>
      </div>

      <div className="pt-16 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Piezas con Identidad
          </h2>
          <p className="text-lg text-[#5A4E46] max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra línea de accesorios, donde los tonos azul denim y
            tierra se entrelazan para crear piezas artesanales únicas.
            Funcionalidad y herencia en cada puntada.
          </p>
        </div>

        {/* CONTROLES DE FILTRADO (TABS) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {categoriasFiltro.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                filtroActivo === categoria
                  ? "bg-[#1E3A5F] text-white shadow-lg transform scale-105"
                  : "bg-white text-[#8B6A50] border border-[#E8E2D9] hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUCTOS FILTRADOS */}
        {/* Usamos key={item.codigo} para que React anime o recicle bien los elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accesoriosFiltrados.map((item) => (
            <div
              key={item.codigo}
              className="group relative bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(30,58,95,0.12)] transition-all duration-300 border border-[#E8E2D9] overflow-hidden transform hover:-translate-y-1 flex flex-col"
            >
              {/* Decoración de textura/hilo en el fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E3A5F]/5 to-[#D28C56]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-[#1E3A5F] rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* ESPACIO PARA LA IMAGEN DEL PRODUCTO */}
              <div className="w-full h-56 bg-[#F0EBE1] rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
                <span className="absolute text-[#8B6A50] text-sm font-medium z-0">
                  Subir: {item.imagen}
                </span>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* CONTENIDO DEL TEXTO DEL PRODUCTO */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-[#F1EBE1] text-[#8B6A50] text-xs font-bold rounded-full tracking-wider">
                      {item.codigo}
                    </span>
                    <svg
                      className="w-5 h-5 text-[#D28C56] opacity-70 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-[#2A3B4C] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                    {item.nombre}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F0EBE1] flex items-center text-[#6B5A4E]">
                  <svg
                    className="w-4 h-4 mr-2 text-[#1E3A5F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="text-sm font-medium">{item.medidas}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accesorios;
