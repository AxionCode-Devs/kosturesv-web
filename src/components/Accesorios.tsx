import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import monederosBanner from "../assets/monederos-banner.jpg";
import cosmetiquerasBanner from "../assets/cosmetiquera-banner.jpg";
import estuchesBanner from "../assets/estuches-banner.jpg";

// 1. DEFINICIÓN DE INTERFAZ (Tipado para nuestra arquitectura)
export interface Accesorio {
  codigo: string;
  nombre: string;
  medidas: string;
  imagen: string;
  categoria: "Monederos" | "Cosmetiqueras" | "Estuches"; // Restringimos los valores posibles
}

// 2. DATOS CON CATEGORÍAS
// Arquitectura: Se utiliza una estructura de datos centralizada que actúa como nuestra "Base de Datos local".
// Al mantener las rutas de las imágenes apuntando a la carpeta "public" (ej. /imagenes/productos/...),
// evitamos hacer un "import" manual por cada foto. Esto hace el sistema escalable.
const accesorios: Accesorio[] = [
  {
    codigo: "K001MNP",
    nombre: "Monedero Pequeño",
    medidas: "8 x 10 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K001MNP.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K019MN2",
    nombre: "Monedero Doble Zipper",
    medidas: "12 x 16 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K019MN2.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K043OPP",
    nombre: "Monedero Pequeño",
    medidas: "11 x 10 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K043OPP.jpg",
    categoria: "Monederos",
  },
  {
    codigo: "K044OCC",
    nombre: "Monedero Mediano",
    medidas: "12 x 11 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K044OCC.jpg",
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
    nombre: "Estuche para Celular, de Mano",
    medidas: "14 x 21 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K030CEL.jpg",
    categoria: "Estuches",
  },
  {
    codigo: "K031CEL",
    nombre: "Estuche de Celular con Asa",
    medidas: "14 x 21 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K031CEL.jpg",
    categoria: "Estuches",
  },
];

// Lista de filtros para nuestros botones (Pestañas)
const categoriasFiltro = ["Todos", "Monederos", "Cosmetiqueras", "Estuches"];

// Diccionario de Arquitectura: Conecta cada filtro con su experiencia visual
const informacionBanner: Record<string, { titulo: string; imagen: string }> = {
  Todos: {
    titulo: "Colección Accesorios",
    imagen: monederosBanner, // Actúa como fallback, aunque "Todos" usa el Carrusel
  },
  Monederos: {
    titulo: "Monederos",
    imagen: monederosBanner,
  },
  Cosmetiqueras: {
    titulo: "Cosmetiqueras",
    imagen: cosmetiquerasBanner,
  },
  Estuches: {
    titulo: "Estuches",
    imagen: estuchesBanner,
  },
};

const slidesCollage = [
  informacionBanner["Monederos"].imagen,
  informacionBanner["Cosmetiqueras"].imagen,
  informacionBanner["Estuches"].imagen,
];

const Accesorios: React.FC = () => {
  // 1. Interceptamos la información de la ruta que viene desde la página principal
  const location = useLocation();

  // 2. Extraemos el filtro oculto. Si no viene nada, usamos "Todos" por defecto.
  const categoriaInicial = location.state?.filtroDeseado || "Todos";

  // 3. ESTADO DEL COMPONENTE (Ahora inicia con la categoría que interceptamos)
  const [filtroActivo, setFiltroActivo] = useState<string>(categoriaInicial);
  // Estado para el Modal de Vista Rápida
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Accesorio | null>(null);
  // Estado para el Collage del Banner Principal
  const [slideActivo, setSlideActivo] = useState(0);

  // 4. SCROLL AL INICIO (Para que el usuario siempre vea el banner principal att hector)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, filtroActivo]);

  // 4.5 LÓGICA DE ANIMACIÓN DEL COLLAGE (Solo cuando está en "Todos")
  useEffect(() => {
    if (filtroActivo !== "Todos") return;

    const interval = setInterval(() => {
      setSlideActivo((prev) => (prev + 1) % slidesCollage.length);
    }, 4000); // Cambia de imagen cada 4 segundos

    return () => clearInterval(interval);
  }, [filtroActivo]);

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
      <div className="relative w-full h-64 md:h-96 lg:h-[450px] bg-[#2A3B4C] overflow-hidden">
        {filtroActivo === "Todos" ? (
          /* COLLAGE ANIMADO: Muestra las 3 imágenes rotando suavemente */
          slidesCollage.map((slideImg, index) => (
            <img
              key={`slide-${index}`}
              src={slideImg}
              alt="Collage Accesorios"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === slideActivo ? "opacity-80" : "opacity-0"
              }`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ))
        ) : (
          /* BANNER ESTÁTICO DE CATEGORÍA */
          <img
            key={filtroActivo}
            src={informacionBanner[filtroActivo]?.imagen}
            alt={
              informacionBanner[filtroActivo]?.titulo || "Accesorios Kosture"
            }
            className="w-full h-full object-cover opacity-80 animate-[fadeIn_0.5s_ease-in-out]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
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
              onClick={() => setProductoSeleccionado(item)}
              className="cursor-pointer group relative bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(30,58,95,0.12)] transition-all duration-300 border border-[#E8E2D9] overflow-hidden transform hover:-translate-y-1 flex flex-col"
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

      {/* MODAL DE VISTA RÁPIDA (ELEVACIÓN DE ESTADO Y COMPOSICIÓN) */}
      {productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          {/* Overlay click para cerrar */}
          <div
            className="absolute inset-0"
            onClick={() => setProductoSeleccionado(null)}
          ></div>

          {/* Contenido del Modal */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out] z-10 max-h-[90vh]">
            {/* Botón de cerrar superior */}
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-[#2A3B4C] hover:text-[#D28C56] hover:bg-white rounded-full p-2 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Columna Izquierda: Imagen */}
            <div className="w-full md:w-1/2 bg-[#F0EBE1] flex items-center justify-center min-h-[300px] p-8 relative">
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-full object-contain max-h-[60vh] drop-shadow-xl"
              />
            </div>

            {/* Columna Derecha: Información */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white overflow-y-auto">
              <span className="inline-block px-3 py-1 bg-[#F1EBE1] text-[#8B6A50] text-sm font-bold rounded-full tracking-wider w-max mb-4">
                {productoSeleccionado.codigo}
              </span>

              <h3 className="text-3xl font-extrabold text-[#2A3B4C] mb-2">
                {productoSeleccionado.nombre}
              </h3>

              <p className="text-[#8B6A50] font-medium tracking-widest uppercase text-sm mb-8">
                {productoSeleccionado.categoria}
              </p>

              <div className="space-y-4 mb-8 border-y border-[#F0EBE1] py-6">
                <div className="flex items-center text-[#5A4E46]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#1E3A5F]"
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
                  <span className="text-lg">
                    Medidas:{" "}
                    <span className="font-semibold">
                      {productoSeleccionado.medidas}
                    </span>
                  </span>
                </div>
                <div className="flex items-center text-[#5A4E46]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#1E3A5F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">Hecho a mano en El Salvador</span>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              {/* hey majes no se les olvide cambiar este parte el numero de telefono tal cual esta el formato tienen que ponerlo y si tocan el codigo no lo cambies para que quede registro si a futuro se cambia. */}
              <a
                href={`https://wa.me/50377764086?text=${encodeURIComponent(
                  `Hola, me interesa adquirir el producto ${productoSeleccionado.nombre} (${productoSeleccionado.codigo}).\n\nReferencia visual: ${window.location.origin}${productoSeleccionado.imagen}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                </svg>
                Me interesa
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accesorios;
