import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function HechoEnSV() {
  const { t } = useLanguage();

  const iconos = [
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  ];

  return (
    <section className="w-full bg-[#1C2E3A] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#1A9E8F] text-[11px] font-semibold tracking-[0.3em] uppercase">
              {t.hechoEnSV.sectionLabel}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.hechoEnSV.title} <span className="italic font-normal text-[#7EC8BD]">{t.hechoEnSV.titleAccent}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.hechoEnSV.values.map((valor, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group text-center p-8 md:p-10 border border-white/10 rounded-xl hover:border-[#1A9E8F]/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A9E8F]/15 text-[#1A9E8F] mb-6 group-hover:bg-[#1A9E8F]/25 group-hover:scale-110 transition-all duration-500">
                  {iconos[index]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {valor.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {valor.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}