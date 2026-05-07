import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { catalogData } from "../data/catalogData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsCatalogOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Inicio", exact: true },
    { to: "/catalogo", label: "Catálogo", exact: false },
    { to: "/telas", label: "Telas Artesanales", exact: true },
    { to: "/accesorios", label: "Accesorios", exact: true },
    { to: "/tiendas", label: "Tiendas", exact: true },
  ];

  // Solo "Inicio" se marca activo en "/". Los demás solo si su ruta es única.
  const isActive = (link: typeof navLinks[0]) => {
    if (!link.exact) return false;
    return location.pathname === link.to;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-white/95 backdrop-blur-md shadow-md"
            : "py-4 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative">
          <Link to="/" className={`block transition-all duration-500 ${isScrolled ? "mb-1" : "mb-4"}`}>
            <img
              src="/imagenes/logos/kosture-completo-sinfondo.png"
              alt="Kosturé Logo"
              className={`w-auto object-contain transition-all duration-500 hover:opacity-80 ${
                isScrolled ? "h-16 md:h-20" : "h-24 md:h-32"
              }`}
            />
          </Link>

          {/* MENÚ DESKTOP */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li 
                key={link.label}
                onMouseEnter={link.label === "Catálogo" ? () => setIsCatalogOpen(true) : undefined}
                onMouseLeave={link.label === "Catálogo" ? () => setIsCatalogOpen(false) : undefined}
                className={link.label === "Catálogo" ? "" : ""}
              >
                <Link
                  to={link.to}
                  className={`text-[11px] tracking-[0.2em] uppercase font-semibold no-underline transition-colors duration-300 py-2 ${
                    isActive(link) || (link.label === "Catálogo" && isCatalogOpen)
                      ? "text-[#1A9E8F]"
                      : "text-[#2A3B4C] hover:text-[#1A9E8F]"
                  }`}
                >
                  {link.label}
                </Link>

                {/* MEGA MENÚ CATÁLOGO */}
                {link.label === "Catálogo" && (
                  <div
                    className={`absolute top-full left-6 right-6 bg-white shadow-2xl rounded-sm transition-all duration-300 ease-in-out border border-gray-100 cursor-default flex overflow-hidden ${
                      isCatalogOpen
                        ? "opacity-100 visible translate-y-4"
                        : "opacity-0 invisible translate-y-8"
                    }`}
                  >
                    {/* Puente invisible para mantener el hover al mover el mouse */}
                    <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent" />

                    {/* Lado izquierdo - Links */}
                    <div className="w-[60%] grid grid-cols-3 gap-6 p-8 pr-12">
                      {catalogData.map((category, index) => (
                        <div key={index}>
                          <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5 border-b border-gray-100 pb-2">
                            <Link 
                              to={`/catalogo/${category.slug}`} 
                              className="text-[#2A3B4C] hover:text-[#1A9E8F] transition-colors duration-300 cursor-pointer block"
                            >
                              {category.title}
                            </Link>
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map(item => (
                              <li key={item.name}>
                                <Link to={`/catalogo/${category.slug}#${item.hash}`} className="text-[#516375] hover:text-[#1A9E8F] text-[13px] transition-colors duration-200 block leading-tight">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Lado derecho - Imágenes */}
                    <div className="w-[40%] bg-gray-50/50 p-8 flex gap-6 border-l border-gray-100">
                      <Link to="/catalogo?coleccion=nueva" className="group block flex-1">
                        <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-[2px] bg-gray-200 shadow-sm">
                          <img src="/imagenes/carrusel-inicio/origen_coleccion.png" alt="Nueva Colección" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
                        </div>
                        <h4 className="text-[13px] font-bold text-[#2A3B4C] uppercase tracking-[0.1em] mb-1">Nueva Colección</h4>
                        <p className="text-[11px] tracking-widest uppercase text-[#1A9E8F] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Descubrir <span>→</span>
                        </p>
                      </Link>
                      
                      <Link to="/catalogo?coleccion=artesanos" className="group block flex-1">
                        <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-[2px] bg-gray-200 shadow-sm">
                          <img src="/imagenes/ejemplo-telar.jpg" alt="Artesanos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
                        </div>
                        <h4 className="text-[13px] font-bold text-[#2A3B4C] uppercase tracking-[0.1em] mb-1">Artesanos</h4>
                        <p className="text-[11px] tracking-widest uppercase text-[#1A9E8F] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Conoce Más <span>→</span>
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menú"
          >
            <span className={`block w-6 h-[2px] bg-[#2A3B4C] transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#2A3B4C] transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#2A3B4C] transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl flex flex-col pt-24 px-6 overflow-y-auto pb-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`py-4 text-sm tracking-[0.15em] uppercase font-semibold no-underline border-b border-gray-100 transition-colors duration-300 ${
                  isActive(link) ? "text-[#1A9E8F]" : "text-[#2A3B4C] hover:text-[#1A9E8F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className={isScrolled ? "h-[80px]" : "h-[130px] md:h-[145px]"} />
    </>
  );
}

