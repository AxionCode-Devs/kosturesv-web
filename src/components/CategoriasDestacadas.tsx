import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CategoriasDestacadas() {
  return (
    <section className="w-full bg-[#FFFDF9]">
      
      {/* ═══ BANNER 1: PARALLAX ACCESORIOS ═══ */}
      <ScrollReveal>
        <div 
          className="w-full h-[40vh] md:h-[50vh] relative mb-20 group cursor-pointer bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/imagenes/monederos.png')" }}
        >
          {/* Overlay Oscuro */}
          <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/40 flex flex-col justify-center items-center">
            {/* Marco interior sutil que se encoge */}
            <div className="absolute inset-4 md:inset-8 border border-white/20 scale-[1.02] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-[1.5s] pointer-events-none" />
            
            <h3 
              className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] drop-shadow-2xl z-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nuestros <span className="italic font-normal text-white">Accesorios</span>
            </h3>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ GRILLA 1: ASIMÉTRICA (60% / 40%) ═══ */}
      <div className="w-full px-6 md:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Tarjeta Grande (50%) - Monederos */}
          <ScrollReveal delay={100} className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer bg-black">
              <img
                src="/imagenes/monederos.jpg"
                alt="Monederos"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E3A]/90 via-[#1C2E3A]/20 to-transparent transition-all duration-700 group-hover:from-[#1C2E3A]" />
              
              {/* Marco interno Lujo */}
              <div className="absolute inset-5 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#7EC8BD] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Piezas Únicas
                  </span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                  Monederos
                </h3>
                <Link
                  to="/accesorios"
                  className="group/btn relative inline-flex items-center text-white text-xs font-bold tracking-[0.2em] uppercase no-underline w-fit"
                >
                  <span className="relative z-10 pb-1">Descubrir</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover/btn:w-full" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Tarjeta Pequeña (50%) - Crossbody */}
          <ScrollReveal delay={250} className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer bg-black">
              <img
                src="/imagenes/bolsomorado.png"
                alt="Crossbody"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-700 group-hover:from-black" />
              
              {/* Marco interno Lujo */}
              <div className="absolute inset-5 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#7EC8BD] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Estilo de vida
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6 drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                  Crossbody
                </h3>
                <Link
                  to="/accesorios"
                  className="group/btn relative inline-flex items-center text-white text-xs font-bold tracking-[0.2em] uppercase no-underline w-fit"
                >
                  <span className="relative z-10 pb-1">Ver Diseño</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover/btn:w-full" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ═══ BANNER 2: PARALLAX CARTERAS ═══ */}
      <ScrollReveal>
        <div 
          className="w-full h-[40vh] md:h-[50vh] relative mb-20 group cursor-pointer bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/imagenes/carteras.png')" }}
        >
          {/* Overlay Oscuro */}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/50 flex flex-col justify-center items-center">
            {/* Marco interior */}
            <div className="absolute inset-4 md:inset-8 border-y border-white/20 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-[1.5s] pointer-events-none" />
            
            <h3 
              className="text-white text-3xl md:text-5xl font-bold tracking-[0.1em] drop-shadow-2xl z-10 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Colección de <br className="md:hidden" />
              <span className="italic font-normal text-5xl md:text-7xl text-white ml-0 md:ml-4">Carteras</span>
            </h3>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ GRILLA 2: ASIMÉTRICA INVERSA (40% / 60%) ═══ */}
      <div className="w-full px-6 md:px-10 pb-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Tarjeta Pequeña (50%) - Bolsos Grandes */}
          <ScrollReveal delay={100} className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer bg-black">
              <img
                src="/imagenes/bolso_grande.png"
                alt="Bolsos Grandes"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E3A]/90 via-[#1C2E3A]/20 to-transparent transition-all duration-700 group-hover:from-[#1C2E3A]" />
              
              {/* Marco interno */}
              <div className="absolute inset-5 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#7EC8BD] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Espacio Ideal
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6 drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                  Bolsos Grandes
                </h3>
                <Link
                  to="/accesorios"
                  className="group/btn relative inline-flex items-center text-white text-xs font-bold tracking-[0.2em] uppercase no-underline w-fit"
                >
                  <span className="relative z-10 pb-1">Ver Diseño</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover/btn:w-full" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Tarjeta Grande (50%) - Cartera Trenzada */}
          <ScrollReveal delay={250} className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer bg-black">
              <img
                src="/imagenes/cartera_trensada.png"
                alt="Cartera Trenzada"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-700 group-hover:from-black" />
              
              {/* Marco interno */}
              <div className="absolute inset-5 border border-white/0 group-hover:border-white/30 transition-colors duration-[1s] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#7EC8BD] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Arte Manual
                  </span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                  Cartera Trenzada
                </h3>
                <Link
                  to="/accesorios"
                  className="group/btn relative inline-flex items-center text-white text-xs font-bold tracking-[0.2em] uppercase no-underline w-fit"
                >
                  <span className="relative z-10 pb-1">Descubrir</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A9E8F] transition-all duration-500 group-hover/btn:w-full" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

    </section>
  );
}
