import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slidesCollage = [
  "/imagenes/categorias/bolsos-tipo-cartera.jpg",
  "/imagenes/categorias/carteras-trenzadas.jpg",
  "/imagenes/categorias/maxi-carteras.jpg"
];

const mainCategories = [
  { title: 'Bolsos y Carteras', slug: 'bolsos-carteras', image: '/imagenes/categorias/bolsos-tipo-cartera.jpg' },
  { title: 'Bandoleras y Morrales', slug: 'bandoleras-morrales', image: '/imagenes/categorias/bandoleras.jpg' },
  { title: 'Monederos y Estuches', slug: 'monederos-estuches', image: '/imagenes/categorias/monederos.jpg' },
  { title: 'Especialidades', slug: 'especialidades', image: '/imagenes/categorias/mandiles-denim.jpg' },
];

export default function Catalogo() {
  const [slideActivo, setSlideActivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideActivo((prev) => (prev + 1) % slidesCollage.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FFFDF9] min-h-screen font-sans pb-24">
      {/* IMAGEN DE CABECERA (BANNER DINÁMICO) */}
      <div className="relative w-full h-64 md:h-96 lg:h-[450px] bg-[#1C2E3A] overflow-hidden">
        {slidesCollage.map((slideImg, index) => (
          <img
            key={`slide-${index}`}
            src={slideImg}
            alt="Collage Catálogo"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === slideActivo ? "opacity-80" : "opacity-0"
            }`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}
        {/* Overlay oscuro extra para garantizar legibilidad */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-20">
          <h1
            className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-md uppercase mb-4 animate-[slideDown_0.5s_ease-out]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NUESTRO CATÁLOGO
          </h1>
          <div className="h-1 w-24 bg-[#1A9E8F] rounded-full animate-[fadeIn_1s_ease-out]"></div>
        </div>

        {/* Dots (Indicadores Visuales) */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {slidesCollage.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideActivo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === slideActivo ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="pt-16 max-w-7xl mx-auto px-6">
        <p className="text-[#516375] text-center mb-16 max-w-2xl mx-auto">
          Explora nuestra colección completa de productos hechos a mano. Cada pieza es única y diseñada con pasión.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainCategories.map((item) => (
            <Link 
              key={item.slug} 
              to={`/catalogo/${item.slug}`}
              className="group relative block w-full bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 h-[280px]"
            >
              {/* Imagen de fondo cubriendo todo */}
              <div className="absolute inset-0">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-medium z-0">
                  {item.image.split('/').pop()}
                </span>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              
              {/* Overlay base y efecto hover oscuro/brand */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-colors duration-500 group-hover:from-[#1C2E3A]/90 group-hover:via-[#1C2E3A]/60 group-hover:to-[#1A9E8F]/30 z-10"></div>
              
              {/* Contenido (Textos superpuestos) */}
              <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div className="flex-1 overflow-hidden pr-4">
                    <span className="inline-block mb-3 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full tracking-widest border border-white/30 shadow-sm transition-colors duration-300 group-hover:bg-white/30">
                      COLECCIÓN
                    </span>
                    
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight truncate transition-transform duration-300 transform group-hover:translate-x-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                      title={item.title}
                    >
                      {item.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm line-clamp-1 md:line-clamp-2 max-w-md opacity-0 max-h-0 transition-all duration-500 group-hover:opacity-100 group-hover:max-h-20 group-hover:mt-3">
                      Descubre nuestra exclusiva línea diseñada artesanalmente para tu estilo de vida.
                    </p>
                  </div>
                  
                  {/* Botón / Icono flotante derecho */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-lg">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-[#1A9E8F] transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
