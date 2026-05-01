import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { catalogData } from "../data/catalogData";
import { mockProducts, type Product } from "../data/mockProducts";
import ScrollReveal from "./ScrollReveal";

export default function CategoryView() {
  const { categoriaSlug } = useParams<{ categoriaSlug: string }>();
  const [productoSeleccionado, setProductoSeleccionado] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoriaSlug]);

  // Buscar el título de la categoría basado en el slug
  const categoryTitles: Record<string, string> = {
    'bolsos-carteras': 'Bolsos y Carteras',
    'bandoleras-morrales': 'Bandoleras y Morrales',
    'monederos-estuches': 'Monederos y Estuches',
    'especialidades': 'Especialidades'
  };
  
  let categoryTitle = categoriaSlug ? categoryTitles[categoriaSlug] : "";

  if (!categoryTitle && categoriaSlug) {
    // Fallback format if not found
    categoryTitle = categoriaSlug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  // Filtrar productos mock
  const productos = mockProducts.filter((p) => p.categoriaSlug === categoriaSlug);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Cabecera Elegante */}
        <ScrollReveal className="mb-16 text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {categoryTitle}
          </h1>
          <div className="h-1 w-24 bg-[#1A9E8F] rounded-full mx-auto animate-[fadeIn_1s_ease-out]"></div>
        </ScrollReveal>

        {/* GRID DE PRODUCTOS */}
        {productos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((item, index) => (
              <ScrollReveal 
                key={item.codigo} 
                delay={index * 50} 
                className="flex h-full"
              >
                <div
                  onClick={() => setProductoSeleccionado(item)}
                  className="w-full cursor-pointer group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Decoración de textura/hilo en el fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1A9E8F]/5 to-[#1C2E3A]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-[#1A9E8F] rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* ESPACIO PARA LA IMAGEN DEL PRODUCTO */}
                  <div className="w-full h-56 bg-gray-50 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
                    <span className="absolute text-gray-400 text-xs font-medium z-0">
                      Sin Imagen
                    </span>
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* CONTENIDO DEL TEXTO DEL PRODUCTO */}
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-[#1C2E3A] text-[10px] font-bold rounded-full tracking-widest">
                          {item.codigo}
                        </span>
                        <svg
                          className="w-5 h-5 text-[#1A9E8F] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>

                      <h3 
                        className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1A9E8F] transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.nombre}
                      </h3>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span className="text-sm font-medium">{item.medidas}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">No hay productos disponibles en esta categoría por el momento.</p>
          </div>
        )}
      </div>

      {/* MODAL DE VISTA RÁPIDA (Reutilizado de Accesorios) */}
      {productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          {/* Overlay click para cerrar */}
          <div
            className="absolute inset-0"
            onClick={() => setProductoSeleccionado(null)}
          ></div>

          {/* Contenido del Modal */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out] z-10 max-h-[90vh]">
            {/* Botón de cerrar superior */}
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-gray-900 hover:text-[#1A9E8F] hover:bg-white rounded-full p-2 transition-all shadow-sm hover:shadow-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Columna Izquierda: Imagen (Studio Backdrop) */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[300px] p-8 md:p-16 relative border-r border-gray-100 overflow-hidden">
              {/* Marca de agua decorativa */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden">
                <span className="text-[80px] md:text-[100px] font-black text-white drop-shadow-sm opacity-50 select-none tracking-tighter">
                  KOSTURE
                </span>
              </div>
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-full object-contain max-h-[60vh] drop-shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Columna Derecha: Información Editorial */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#1A9E8F] font-bold tracking-[0.2em] uppercase text-[10px]">
                    {categoryTitle}
                  </span>
                  <span className="text-gray-400 text-[10px] font-mono tracking-widest bg-gray-50 px-2 py-1 rounded">
                    REF: {productoSeleccionado.codigo}
                  </span>
                </div>

                <h3 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {productoSeleccionado.nombre}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  Cada pieza es confeccionada a mano, fusionando técnicas tradicionales con un diseño pensado para la vida urbana contemporánea.
                </p>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mr-4">
                      <svg className="w-4 h-4 text-[#1C2E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Dimensiones</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{productoSeleccionado.medidas}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mr-4">
                      <svg className="w-4 h-4 text-[#1C2E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Origen Artesanal</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{productoSeleccionado.origen || "Hecho a mano en El Salvador"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp Premium */}
              <div className="pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/50377764086?text=${encodeURIComponent(
                    `Hola, me interesa adquirir el producto ${productoSeleccionado.nombre} (${productoSeleccionado.codigo}).\n\nReferencia visual: ${window.location.origin}${productoSeleccionado.imagen}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full relative overflow-hidden bg-[#1C2E3A] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-500 flex items-center justify-center hover:shadow-2xl hover:bg-gray-900 transform hover:-translate-y-1"
                >
                  {/* Animación de línea verde lateral en hover */}
                  <span className="absolute left-0 top-0 w-1.5 h-full bg-[#25D366] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  
                  <svg
                    className="w-5 h-5 mr-3 text-[#25D366] group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                  </svg>
                  <span className="tracking-wide text-[13px] uppercase">Consultar Disponibilidad</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
