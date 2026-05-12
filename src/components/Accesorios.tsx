import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import monederosBanner from "../assets/monederos-banner.webp";
import cosmetiquerasBanner from "../assets/cosmetiquera-banner.webp";
import estuchesBanner from "../assets/estuches-banner.webp";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

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
    imagen: "/imagenes/productos/K001MNP.webp",
    categoria: "Monederos",
  },
  {
    codigo: "K019MN2",
    nombre: "Monedero Doble Zipper",
    medidas: "12 x 16 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K019MN2.webp",
    categoria: "Monederos",
  },
  {
    codigo: "K043OPP",
    nombre: "Monedero Pequeño",
    medidas: "11 x 10 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K043OPP.webp",
    categoria: "Monederos",
  },
  {
    codigo: "K044OCC",
    nombre: "Monedero Mediano",
    medidas: "12 x 11 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K044OCC.webp",
    categoria: "Monederos",
  },
  {
    codigo: "K002CQ",
    nombre: "Cosmetiquera",
    medidas: "16 x 25 cm, base 5 cm",
    imagen: "/imagenes/productos/K002CQ.webp",
    categoria: "Cosmetiqueras",
  },
  {
    codigo: "K030CEL",
    nombre: "Estuche para Celular, de Mano",
    medidas: "14 x 21 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K030CEL.webp",
    categoria: "Estuches",
  },
  {
    codigo: "K031CEL",
    nombre: "Estuche de Celular con Asa",
    medidas: "14 x 21 cm", // Alto x Ancho
    imagen: "/imagenes/productos/K031CEL.webp",
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
  const { t } = useLanguage();

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
      className="bg-[#FFFDF9] min-h-screen font-sans pb-20"
    >
      {/* IMAGEN DE CABECERA (BANNER DINÁMICO) */}
      <div className="relative w-full h-64 md:h-96 lg:h-[450px] bg-[#1C2E3A] overflow-hidden">
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
            className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-md uppercase mb-4 animate-[slideDown_0.5s_ease-out]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {informacionBanner[filtroActivo]?.titulo || "Colección Accesorios"}
          </h1>
          <div className="h-1 w-24 bg-[#1A9E8F] rounded-full animate-[fadeIn_1s_ease-out]"></div>
        </div>
      </div>

      <div className="pt-16 px-6 sm:px-10 max-w-7xl mx-auto">
        <ScrollReveal className="mb-10 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.accesorios.sectionTitle} <span className="italic font-normal text-[#1A9E8F]">{t.accesorios.sectionTitleAccent}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.accesorios.sectionDesc}
          </p>
        </ScrollReveal>

        {/* CONTROLES DE FILTRADO (TABS) */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12" delay={150}>
          {categoriasFiltro.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                filtroActivo === categoria
                  ? "bg-[#1C2E3A] text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#1C2E3A] hover:text-[#1C2E3A]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </ScrollReveal>

        {/* GRID DE PRODUCTOS FILTRADOS */}
        {/* Usamos key={item.codigo} para que React anime o recicle bien los elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accesoriosFiltrados.map((item, index) => (
            <ScrollReveal 
              key={item.codigo} 
              delay={index * 50} 
              className="flex h-full"
            >
              <div
                onClick={() => setProductoSeleccionado(item)}
                className="relative h-[350px] md:h-[450px] w-full group overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                
                {/* Overlay Oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E3A]/90 via-[#1C2E3A]/20 to-transparent transition-all duration-700 group-hover:from-[#1C2E3A]/80" />
                
                {/* Marco interno Lujo */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                  <div className="overflow-hidden mb-2">
                    <span className="block text-[#7EC8BD] text-[10px] font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      REF: {item.codigo}
                    </span>
                  </div>
                  <h3 
                    className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 drop-shadow-md" 
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.nombre}
                  </h3>
                  <div className="relative inline-flex items-center text-white/90 text-xs font-light tracking-[0.1em] w-fit">
                    <span className="relative z-10 pb-1">{item.medidas}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-gray-900 hover:text-[#1A9E8F] hover:bg-white rounded-full p-2 transition-all shadow-sm hover:shadow-md"
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

            {/* Columna Izquierda: Imagen (Studio Backdrop) */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[300px] p-8 md:p-16 relative border-r border-gray-100 overflow-hidden">
              {/* Marca de agua decorativa */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden">
                <span className="text-[80px] md:text-[100px] font-black text-white drop-shadow-sm opacity-50 select-none tracking-tighter">
                  KOSTURE
                </span>
              </div>
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-full object-contain max-h-[60vh] drop-shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Columna Derecha: Información Editorial */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#1A9E8F] font-bold tracking-[0.2em] uppercase text-[10px]">
                    {productoSeleccionado.categoria}
                  </span>
                  <span className="text-gray-400 text-[10px] font-mono tracking-widest bg-gray-50 px-2 py-1 rounded">
                    REF: {productoSeleccionado.codigo}
                  </span>
                </div>

                <h3 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {productoSeleccionado.nombre}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  {t.modal.craftDescription}
                </p>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mr-4">
                      <svg className="w-4 h-4 text-[#1C2E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{t.modal.dimensions}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{productoSeleccionado.medidas}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mr-4">
                      <svg className="w-4 h-4 text-[#1C2E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{t.modal.origin}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{t.modal.originValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp Premium */}
              {/* hey majes no se les olvide cambiar este parte el numero de telefono tal cual esta el formato tienen que ponerlo y si tocan el codigo no lo cambies para que quede registro si a futuro se cambia. */}
              <div className="pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/50370279536?text=${encodeURIComponent(
                    t.modal.whatsappMsg(productoSeleccionado.nombre, productoSeleccionado.codigo, `${window.location.origin}${productoSeleccionado.imagen}`),
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full relative overflow-hidden bg-[#1C2E3A] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-500 flex items-center justify-center hover:shadow-2xl hover:bg-gray-900 transform hover:-translate-y-1"
                >
                  {/* Animación de línea verde lateral en hover */}
                  <span className="absolute left-0 top-0 w-1.5 h-full bg-[#25D366] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  
                  <svg
                    className="w-5 h-5 mr-3 text-[#25D366] group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                  </svg>
                  <span className="tracking-wide text-[13px] uppercase">{t.modal.whatsappBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accesorios;
