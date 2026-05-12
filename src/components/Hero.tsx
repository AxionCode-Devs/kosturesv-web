import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

const heroImages = [
  "/imagenes/carrusel-inicio/e.webp",
  "/imagenes/carrusel-inicio/bolsos2.webp",
  "/imagenes/carrusel-inicio/origen_coleccion.webp",
  "/imagenes/carrusel-inicio/wmremove-transformed.webp"
];

export default function Hero() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === img1Ref.current) setIsVisible1(true);
            if (entry.target === img2Ref.current) setIsVisible2(true);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (img1Ref.current) observer.observe(img1Ref.current);
    if (img2Ref.current) observer.observe(img2Ref.current);

    return () => {
      observer.disconnect();
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section className="w-full bg-[#FFFDF9] overflow-hidden">
      {/* ═══ 1. HERO BANNER ═══ */}
      <div className="w-full h-[85vh] md:h-[92vh] relative overflow-hidden bg-black">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Productos Kosturé ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2s] ease-in-out ${
              index === currentSlide ? "opacity-90" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
          <span
            className={`inline-block w-fit text-[#7EC8BD] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.hero.subtitle}
          </span>

          <div
            className={`h-[2px] bg-[#1A9E8F] mb-6 transition-all duration-1000 delay-200 ${
              heroLoaded ? "w-20 md:w-32" : "w-0"
            }`}
          />

          <h1
            className={`text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[0.95] max-w-4xl transition-all duration-700 delay-300 drop-shadow-lg ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.titleLine1}<br />
            <span className="italic font-normal text-white/90">{t.hero.titleLine2}</span>
          </h1>

          <p
            className={`text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed mb-8 drop-shadow-md transition-all duration-700 delay-500 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t.hero.description}
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#nuestra-historia"
              className="bg-[#1A9E8F] hover:bg-[#157E73] text-white px-8 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded no-underline"
            >
              {t.hero.btnHistory}
            </a>
            <Link
              to="/accesorios"
              className="border-2 border-white/70 hover:border-white text-white px-8 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 rounded no-underline"
            >
              {t.hero.btnProducts}
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[bounceDown_2s_ease-in-out_infinite]">
          <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ═══ SEPARADOR 1 — Tijeras decorativas ═══ */}
      <div className="flex items-center justify-center py-10 gap-4">
        <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#1A9E8F]/40" />
        <svg className="w-6 h-6 text-[#1A9E8F]/40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
        </svg>
        <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#1A9E8F]/40" />
      </div>

      {/* ═══ 2. NUESTRA HISTORIA ═══ */}
      <div id="nuestra-historia" className="w-full flex flex-col lg:flex-row items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24 gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Imagen */}
        <div
          ref={img1Ref}
          className={`w-full lg:w-1/2 transform transition-all duration-1000 ease-out ${
            isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#1A9E8F]/20 rounded-xl -z-10 transition-all duration-500 group-hover:-top-5 group-hover:-left-5" />
            <img
              src="/imagenes/kosture.webp"
              alt="Nuestra artesanía"
              className="w-full h-[450px] lg:h-[600px] object-cover rounded-xl shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-5 -right-3 md:right-6 bg-[#1A9E8F] text-white px-6 py-3 shadow-lg rounded">
              <p className="text-xs tracking-[0.2em] uppercase font-semibold">{t.hero.fromSanMartin}</p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <ScrollReveal delay={100}>
            <span className="text-[11px] font-semibold text-[#1A9E8F] tracking-[0.3em] uppercase mb-3 block">
              {t.hero.historyLabel}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.hero.historyTitle1}<br />
              <span className="italic font-normal text-[#1A9E8F]">{t.hero.historyTitle2}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={350}>
            <div className="space-y-5 text-gray-600 leading-relaxed text-base lg:text-lg max-w-xl text-justify">
              <p>
                {t.hero.historyP1}
              </p>
              <p>
                {t.hero.historyP2}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ═══ 3. CONTINUACIÓN HISTORIA ═══ */}
      <div className="w-full bg-[#F5F2ED]">
        <div className="flex flex-col lg:flex-row items-start px-8 md:px-16 lg:px-20 py-20 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t.hero.consolidationTitle1}<br />
                <span className="italic font-normal text-[#1A9E8F]">{t.hero.consolidationTitle2}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base lg:text-lg max-w-xl text-justify mb-8">
                <p>
                  {t.hero.consolidationP1}
                </p>
                <p>
                  {t.hero.consolidationP2}
                </p>

                <h3
                  className="text-2xl font-bold text-gray-900 pt-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.hero.essenceTitle}
                </h3>
                <p>
                  {t.hero.essenceP1}
                </p>
                <p>
                  {t.hero.essenceP2}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Link
                to="/accesorios"
                className="bg-[#1A9E8F] hover:bg-[#157E73] text-white px-10 py-3.5 w-fit text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded no-underline"
              >
                {t.hero.btnProducts}
              </Link>
            </ScrollReveal>
          </div>

          {/* Imagen */}
          <div
            ref={img2Ref}
            className={`w-full lg:w-1/2 order-1 lg:order-2 transform transition-all duration-1000 ease-out ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#1A9E8F]/15 rounded-xl -z-10 transition-all duration-500 group-hover:-top-5 group-hover:-right-5" />
              <img
                src="/imagenes/kostur2.webp"
                alt="Nuestra pasión"
                className="w-full h-[500px] lg:h-[850px] object-cover rounded-xl shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
