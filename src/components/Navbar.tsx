import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-6 flex flex-col items-center border-b border-gray-100">
      {/* LOGO */}
      <div className="mb-6 flex justify-center">
        <Link to="/">
          <img
            src="/imagenes/logooo.png"
            alt="Kosture Logo"
            className="h-24 md:h-28 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>

      {/* MENÚ - Con espacio real (gap-12) */}
      <ul className="flex items-center gap-6 text-xs text-gray-700 tracking-widest uppercase font-medium">
        <li className="cursor-pointer hover:text-gray-900 transition-colors">
          <Link to="/">Inicio</Link>
        </li>
        <span className="text-gray-300 select-none">•</span>
        <li className="cursor-pointer hover:text-gray-900 transition-colors">
          <Link to="/">Catalogo</Link>
        </li>
        <span className="text-gray-300 select-none">•</span>
        <li className="cursor-pointer hover:text-gray-900 transition-colors">
          <Link to="/telas">Telas artesanales</Link>
        </li>
        <span className="text-gray-300 select-none">•</span>
        <li className="cursor-pointer hover:text-gray-900 transition-colors">
          <Link to="/accesorios">Accesorios</Link>
        </li>
        <span className="text-gray-300 select-none">•</span>
        <li className="cursor-pointer hover:text-gray-900 transition-colors">
          <Link to="/">Tiendas</Link>
        </li>
      </ul>
    </nav>
  );
}
