import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import bolsoTipoCartera from '../assets/bolso-tipo-cartera.webp';
import bolsoCuadrado from '../assets/bolso-cuadrado.webp';
import bolsoGrande from '../assets/Bolso-grande.webp';
import bolsoPompom from '../assets/bolso-pompom.webp';

import bandoleraImg from '../assets/bandolera.webp';
import bolsoMedialuna from '../assets/bolso-medialuna.webp';
import morralesImg from '../assets/morrales.webp';
import bandoleraMasc from '../assets/bandolera-masc.webp';

import bolsoAlmuerzo from '../assets/bolso-almuerzo.webp';
import mandil from '../assets/mandil.webp';

const slidesCollage = [
  bolsoTipoCartera,
  bolsoGrande,
  bolsoPompom
];

const mainCategories = [
  { 
    title: 'Bolsos y Carteras', 
    slug: 'bolsos-carteras', 
    images: [bolsoTipoCartera, bolsoCuadrado, bolsoGrande, bolsoPompom] 
  },
  { 
    title: 'Bandoleras y Morrales', 
    slug: 'bandoleras-morrales', 
    images: [bandoleraImg, bolsoMedialuna, morralesImg, bandoleraMasc] 
  },
  { 
    title: 'Especialidades', 
    slug: 'especialidades', 
    images: [bolsoAlmuerzo, mandil, bolsoAlmuerzo, mandil] 
  },
];

export default function Catalogo() {
  const [slideActivo, setSlideActivo] = useState(0);
  const { t } = useLanguage();

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
            {t.catalogo.bannerTitle}
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
          {t.catalogo.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainCategories.map((item) => (
            <Link 
              key={item.slug} 
              to={`/catalogo/${item.slug}`}
              className="relative h-[350px] md:h-[450px] w-full group overflow-hidden bg-black block rounded-2xl"
            >
              {/* COLLAGE DE FONDO */}
              <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2">
                {item.images.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${item.title} ${idx}`} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-[2s] group-hover:scale-110 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ))}
              </div>
              
              {/* Overlay Oscuro */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1C2E3A] via-[#1C2E3A]/40 to-transparent transition-all duration-700 group-hover:from-[#1C2E3A]/90" />
              
              {/* Marco interno Lujo */}
              <div className="absolute inset-4 z-20 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

              {/* Texto */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#7EC8BD] text-[10px] font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    COLECCIÓN
                  </span>
                </div>
                <h3 
                  className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 drop-shadow-md" 
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <div className="relative inline-flex items-center text-white/90 text-xs font-sans tracking-[0.1em] w-fit">
                  <span className="relative z-10 pb-1">{ t.catalogo.viewCategory }</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
