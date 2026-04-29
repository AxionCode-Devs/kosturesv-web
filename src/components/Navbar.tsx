import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Inicio", exact: true },
    { to: "/", label: "Catálogo", exact: false },
    { to: "/telas", label: "Telas Artesanales", exact: true },
    { to: "/accesorios", label: "Accesorios", exact: true },
    { to: "/", label: "Tiendas", exact: false },
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
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
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`text-[11px] tracking-[0.2em] uppercase font-semibold no-underline transition-colors duration-300 ${
                    isActive(link)
                      ? "text-[#1A9E8F]"
                      : "text-[#2A3B4C] hover:text-[#1A9E8F]"
                  }`}
                >
                  {link.label}
                </Link>
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
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col pt-28 px-8">
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
