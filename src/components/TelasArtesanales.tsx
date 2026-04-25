import React from "react";

// 1. DEFINICIÓN DE INTERFACES (Tipado fuerte)
// Explicación: Definimos un 'contrato' estricto sobre cómo debe verse un objeto de tipo Tela.
export interface TelaArtesanal {
  id: string; // Identificador único para React (Key)
  nombre: string; // Nombre del material (ej. Denim, Yute)
  descripcion: string; // Descripción detallada del catálogo
  imagenPath: string; // Ruta preparada para cuando subamos las fotos
}

// 2. FUENTE DE DATOS (Mock data escalable)
// Explicación: Separar los datos de la interfaz gráfica nos permite en el futuro
// conectar esto a una base de datos (API) sin tener que rediseñar el componente visual.
const telasData: TelaArtesanal[] = [
  {
    id: "t-denim",
    nombre: "Denim",
    descripcion: "Base de alta resistencia en azul profundo.",
    imagenPath: "/imagenes/telas/denim.jpg",
  },
  {
    id: "t-coloridos",
    nombre: "Telares Coloridos",
    descripcion:
      "Patrones tradicionales salvadoreños usados en morrales y bolsos grandes.",
    imagenPath: "/imagenes/telas/telares-coloridos.jpg",
  },
  {
    id: "t-yute",
    nombre: "Yute",
    descripcion: "Detalles de fibra natural en carteras maxi.",
    imagenPath: "/imagenes/telas/yute.jpg",
  },
  {
    id: "t-elegantes",
    nombre: "Telares Elegantes",
    descripcion: "Estilo refinado para la línea Bucket.",
    imagenPath: "/imagenes/telas/telares-elegantes.jpg",
  },
];

// 3. COMPONENTE PRINCIPAL (Presentación)
const TelasArtesanales: React.FC = () => {
  return (
    // section: Etiqueta semántica HTML5 que agrupa contenido temático.
    <section className="bg-stone-100 min-h-screen font-sans pb-20">
      
      {/* IMAGEN DE CABECERA (BANNER PRINCIPAL) */}
      <div className="relative w-full h-64 md:h-96 bg-blue-900 overflow-hidden">
        {/* La imagen que coloques en la ruta /imagenes/telas-banner.jpg reemplazará este fondo */}
        <img 
          src="/imagenes/telas-banner.jpg" 
          alt="Telas Artesanales Kosture" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Texto sobrepuesto en la cabecera */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-md uppercase mb-4">
            Telas Artesanales
          </h1>
          <div className="h-1 w-32 bg-amber-600 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 px-6 sm:px-10">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Nuestros Materiales
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            La esencia de Kosture reside en la selección cuidadosa de nuestras
            telas. Combinamos la resistencia moderna con la herencia textil
            salvadoreña.
          </p>
        </div>

        {/* CONTENEDOR DE TARJETAS (GRID) */}
        {/* Explicación: CSS Grid es la herramienta más poderosa para layouts bidimensionales. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapeo de datos: Generamos UI dinámicamente basado en la información tipada */}
          {telasData.map((tela) => (
            <div
              key={tela.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200 overflow-hidden flex flex-col"
            >
              {/* Espacio reservado para la imagen de la tela */}
              <div className="h-48 w-full bg-stone-200 relative overflow-hidden flex items-center justify-center">
                <span className="text-stone-500 text-xs font-medium z-0 px-4 text-center">
                  Subir: {tela.imagenPath}
                </span>
                <img
                  src={tela.imagenPath}
                  alt={tela.nombre}
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Contenido textual de la tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-3 border-b border-stone-100 pb-2">
                  {tela.nombre}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed flex-grow">
                  {tela.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TelasArtesanales;
