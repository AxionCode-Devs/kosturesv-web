import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#1A9E8F] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ¿Lista para descubrir nuestros <span className="italic font-normal">productos</span>?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Cada pieza está hecha con amor y dedicación artesanal. Encuentra tu accesorio perfecto.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/catalogo"
              className="bg-white text-[#1A9E8F] px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg rounded no-underline"
            >
              Ver Catálogo
            </Link>
            <a
              href="https://wa.me/50370279536"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/70 hover:border-white text-white px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 rounded no-underline"
            >
              Contáctanos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
