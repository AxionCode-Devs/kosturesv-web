import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import telarProcesoBanner from "../assets/telar-proceso.webp";
import ScrollReveal from "./ScrollReveal";

// 1. DEFINICIÓN DE INTERFACES (Arquitectura de la Información)
// Explicación: Definimos un 'contrato' estricto para nuestro contenido editorial.
export interface TelaArtesanal {
  id: string;
  nombre: string;
  descripcionBreve: string;
  historia: string;
  historiaExtendida: string; // Nuevo campo para la historia larga interactiva
  imagenPlaceholder: string; // Nombre del archivo que subirás luego
  revertido: boolean; // Controla el diseño Zig-Zag (Izquierda o Derecha)
}

// 2. FUENTE DE DATOS (Contenido Editorial)
// Explicación: Aquí están los bloques con la información real y enriquecida.
const telasData: TelaArtesanal[] = [
  {
    id: "t-01",
    nombre: "El Telar de Palanca",
    descripcionBreve: "La técnica ancestral que da color a nuestra identidad.",
    historia: "Nuestros textiles más vibrantes son creados en telares de palanca por artesanos salvadoreños. Esta técnica permite tejer patrones complejos y geométricos, utilizando hilos de algodón multicolor. Cada centímetro de esta tela representa horas de trabajo manual, siendo un legado que se transfiere de generación en generación para asegurar que nuestra herencia textil siga latiendo en el mundo moderno.",
    historiaExtendida: "El proceso de elaboración comienza desde la meticulosa selección del algodón, el cual es teñido a mano utilizando técnicas que aseguran colores vivos y duraderos. Luego, nuestros maestros artesanos dedican jornadas enteras en los telares de palanca tradicionales, entrelazando hilo a hilo. Esta dedicación no solo preserva un arte que está en peligro de desaparecer, sino que nos asegura entregar una pieza con alma, donde cada patrón geométrico cuenta una historia viva de nuestro pasado precolombino y nuestra identidad como cultura.",
    imagenPlaceholder: "ejemplo-telar.webp",
    revertido: false, // Imagen a la izquierda
  },
  {
    id: "t-02",
    nombre: "Denim Premium & Fusión",
    descripcionBreve: "Resistencia urbana con corazón artesanal.",
    historia: "El Denim (mezclilla) es la base de la resistencia de Kosture. Seleccionamos mezclilla de alta calidad por su extrema durabilidad. Lo que hace única a esta tela es su fusión: integramos franjas de telar artesanal o detalles de yute directamente sobre el denim. Esta combinación simboliza cómo la fuerza y el ritmo acelerado de la ciudad pueden convivir en perfecta armonía con la paciencia y el arte de lo hecho a mano.",
    historiaExtendida: "En la confección de bolsos y accesorios urbanos, el desgaste diario es un factor crítico. Por eso importamos Denim de gramaje superior, capaz de soportar el ritmo exigente de la vida moderna. Sin embargo, en Kosture nos negábamos a hacer 'una mochila más'. La magia ocurrió cuando decidimos coser, a mano y con extrema precisión, los coloridos parches de telar directamente sobre el Denim. Es un verdadero choque de mundos: la funcionalidad industrial del tejido vaquero se abraza con el calor humano de la artesanía salvadoreña.",
    imagenPlaceholder: "ejemplo-denim.webp",
    revertido: true, // Imagen a la derecha
  },
  {
    id: "t-03",
    nombre: "Yute y Fibras Naturales",
    descripcionBreve: "La nobleza de la tierra en texturas orgánicas.",
    historia: "Complementamos nuestras creaciones con yute y otras fibras extraídas directamente de la naturaleza. Su textura rústica y tonos tierra aportan un contraste cálido y auténtico a cada pieza. Es un recordatorio constante de nuestro compromiso con las prácticas sustentables y de la belleza imperfecta, pero deslumbrante, de nuestro entorno natural.",
    historiaExtendida: "El yute es conocido mundialmente como la 'fibra dorada' por su brillo natural y su proceso de cultivo ecológico, el cual requiere muy poca agua y cero pesticidas, haciéndolo increíblemente amigable con nuestro planeta. En Kosture, aprovechamos su rigidez estructural para darle cuerpo a carteras y bolsos grandes. Al combinarlo con interiores suaves y costuras reforzadas, logramos piezas que no solo son hermosas a la vista y al tacto, sino que apoyan una economía circular y profundamente responsable con el medio ambiente.",
    imagenPlaceholder: "ejemplo-yute.webp",
    revertido: false, // Imagen a la izquierda
  },
];

const TelasArtesanales: React.FC = () => {
  const location = useLocation();
  const [telaExpandida, setTelaExpandida] = React.useState<string | null>(null);

  const toggleExpandir = (id: string) => {
    setTelaExpandida(telaExpandida === id ? null : id);
  };

  // Asegura que al entrar a la página siempre inicie desde arriba
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <section className="bg-[#FFFDF9] min-h-screen font-sans pb-32 overflow-hidden">
      
      {/* HERO BANNER EDITORIAL */}
      {/* Explicación: Un banner inmersivo de pantalla media que establece el tono serio y profesional. */}
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#1C2E3A] flex items-center justify-center overflow-hidden">
        {/* Fondo con la imagen real */}
        <img
          src={telarProcesoBanner}
          alt="Proceso de Telar Artesanal"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        
        {/* Overlay con gradiente para elegancia y lectura de texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#FFFDF9]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto transform translate-y-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide drop-shadow-2xl mb-6 animate-[slideDown_0.8s_ease-out]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Las Telas
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto animate-[fadeIn_1.5s_ease-out]">
            Descubre la historia, la textura y el alma detrás de cada hilo que da vida a nuestras creaciones.
          </p>
        </div>
      </div>

      {/* INTRODUCCIÓN CULTURAL */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-[1px] bg-[#1A9E8F]/50"></div>
          </div>
          <h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Más que un material,<br /><span className="italic font-normal text-[#1A9E8F]">una identidad</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            En Kosture, no vemos la tela como un simple insumo. Cada corte representa horas de tradición, 
            técnicas heredadas y una profunda conexión con nuestras raíces salvadoreñas. 
            Esta sección es un homenaje a esos materiales.
          </p>
        </ScrollReveal>
      </div>

      {/* SECCIÓN ZIG-ZAG EDITORIAL (STORYTELLING) */}
      {/* Explicación: En lugar de un catálogo de ventas cuadrado, usamos un diseño asimétrico tipo revista. */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 py-12">
        {telasData.map((tela, index) => (
          <div 
            key={tela.id} 
            className={`flex flex-col ${tela.revertido ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
          >
            {/* BLOQUE DE IMAGEN (ESQUELETO) */}
            <ScrollReveal className="w-full lg:w-1/2 relative group" delay={100}>
              {/* Decoración de fondo (Marco asimétrico) adaptado al estilo inicio */}
              <div className={`absolute -inset-4 md:-inset-5 border-2 border-[#1A9E8F]/15 rounded-xl -z-10 transition-all duration-500 group-hover:scale-105 ${tela.revertido ? 'translate-x-3 translate-y-3' : '-translate-x-3 -translate-y-3'}`}></div>
              
              <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 font-semibold tracking-widest uppercase text-xs px-4 py-2">
                  Archivo: {tela.imagenPlaceholder}
                </span>
                
                {/* Etiqueta de "Próximamente" */}
                <div className="absolute top-6 right-6 bg-[#1C2E3A] text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-[0.2em] rounded shadow-md">
                  Espacio Visual
                </div>

                {/* Imagen real: Ocultará el esqueleto automáticamente si el archivo existe */}
                <img 
                  src={`/imagenes/${tela.imagenPlaceholder}`} 
                  alt={tela.nombre}
                  className="absolute inset-0 z-10 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => { 
                    e.currentTarget.style.opacity = "0";
                    e.currentTarget.style.pointerEvents = "none";
                  }}
                />
              </div>
            </ScrollReveal>

            {/* BLOQUE DE TEXTO */}
            <ScrollReveal className="w-full lg:w-1/2 flex flex-col justify-center" delay={300}>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#1A9E8F]/50"></span>
                <span className="text-[#1A9E8F] font-semibold tracking-[0.3em] uppercase text-[11px]">
                  0{index + 1} — Origen
                </span>
              </div>
              
              <h3 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {tela.nombre}
              </h3>
              
              <h4 className="text-xl md:text-2xl text-gray-500 font-serif italic mb-8">
                "{tela.descripcionBreve}"
              </h4>
              
              <div className="text-base lg:text-lg text-gray-600 leading-relaxed mb-10 opacity-90 transition-all duration-500 text-justify">
                <p>{tela.historia}</p>
                {telaExpandida === tela.id && (
                  <p className="mt-4 pt-4 border-t border-gray-200 animate-[fadeIn_0.5s_ease-out]">
                    {tela.historiaExtendida}
                  </p>
                )}
              </div>
              
              {/* Botón dinámico para expandir/colapsar historia */}
              <button 
                onClick={() => toggleExpandir(tela.id)}
                className="self-start relative group inline-flex items-center text-[#1A9E8F] text-xs font-bold tracking-[0.2em] uppercase no-underline w-fit"
              >
                <span className="relative z-10 pb-1 flex items-center gap-2">
                  {telaExpandida === tela.id ? "Cerrar Historia" : "Leer Historia Completa"}
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-300 ${telaExpandida === tela.id ? '-rotate-90' : 'group-hover:translate-x-1'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A9E8F]/30" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover:w-full" />
              </button>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TelasArtesanales;
