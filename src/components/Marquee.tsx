export default function Marquee() {
  const palabras = [
    "HECHO A MANO EN EL SALVADOR",
    "✦",
    "DISEÑO EXCLUSIVO",
    "✦",
    "MODA SOSTENIBLE",
    "✦",
    "PIEZAS ÚNICAS",
    "✦",
    "ARTESANÍA PREMIUM",
    "✦",
  ];

  // Triplicamos el array para asegurar que cubra toda la pantalla y el bucle sea perfecto
  const contenidoMarquee = [...palabras, ...palabras, ...palabras];

  return (
    <div className="w-full bg-[#1A9E8F] py-3 md:py-4 overflow-hidden border-y border-white/20 shadow-inner">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] cursor-default">
        {contenidoMarquee.map((texto, index) => (
          <span 
            key={index} 
            className={`whitespace-nowrap px-6 text-[10px] md:text-xs font-bold tracking-[0.25em] text-white ${
              texto === "✦" ? "opacity-50 text-[8px] md:text-[10px]" : "uppercase"
            }`}
          >
            {texto}
          </span>
        ))}
      </div>
      
      {/* Keyframe inyectado directamente para no tocar el config de Tailwind */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); } /* Se mueve un tercio porque triplicamos el array */
        }
      `}</style>
    </div>
  );
}
