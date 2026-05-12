import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Tiendas() {
    const { t } = useLanguage();
    const sucursales = [
        {
            id: 1,
            nombre: "Kosture Galerías",
            direccion: "Centro comercial Galerias 3° nivel, \nSan Salvador, El Salvador",
            horarios: ["Lunes - Viernes: 9:00 am - 6:00 pm", "Sábado: 9:00 am - 1:00 pm", "Domingo: Cerrado"],
            telefono: "+503 7027 9536",
            mapaUrl: "https://maps.app.goo.gl/kRiBsGxDBHp9zDwaA",
            iframeSrc: "https://maps.google.com/maps?q=Centro%20Comercial%20Galerias%2C%20San%20Salvador%2C%20El%20Salvador&t=&z=16&ie=UTF8&iwloc=&output=embed",
            imgFront: "/imagenes/sucursal/sucursal_galerias.webp",
            imgInside: "/imagenes/sucursal/sucursal_galerias_productos.webp",
            imgAlt: "Kosture Galerías",
            reverse: false,
            imgObjectPos: "object-center"
        },
        {
            id: 2,
            nombre: "Kosture Tienda Mipe Nahuizalco",
            direccion: "Tienda Mipe Nahuizalco, \nNahuizalco, Sonsonate",
            horarios: ["Lunes - Sábado: 9:00 am - 5:00 pm", "Domingo: 9:00 am - 5:00 pm"],
            telefono: "+503 7852 4033",
            mapaUrl: "https://maps.app.goo.gl/zk1kGfSD5q9SUmL86",
            iframeSrc: "https://maps.google.com/maps?q=Tienda%20Mipe%20Nahuizalco&t=&z=16&ie=UTF8&iwloc=&output=embed",
            imgFront: "/imagenes/sucursal/sucursal_nahuizalco.webp",
            imgInside: "/imagenes/sucursal/sucursal_nahuizalco_productos.webp",
            imgAlt: "Kosture Tienda Mipe Nahuizalco",
            reverse: true,
            imgObjectPos: "object-center"
        }
    ];

    return (
        <section id="tiendas" className="bg-[#FFFDF9] min-h-screen font-sans pb-20">
            {/* IMAGEN DE CABECERA (BANNER) */}
            <div className="relative w-full h-64 md:h-96 lg:h-[450px] bg-[#1C2E3A] overflow-hidden">
                <img
                    src="/imagenes/sucursal/sucursal_galerias.webp"
                    alt="Banner Tiendas Kosture"
                    className="w-full h-full object-cover opacity-50 animate-[fadeIn_0.5s_ease-in-out] object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E3A]/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-md uppercase mb-4 animate-[slideDown_0.5s_ease-out]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t.tiendas.title}
                    </h1>
                    <div className="h-1 w-24 bg-[#1A9E8F] rounded-full animate-[fadeIn_1s_ease-out]"></div>
                </div>
            </div>

            <div className="pt-16 w-full bg-[#FFFDF9]">
                <ScrollReveal>
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                        <div className="text-center mb-20">
                            <h2 
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Visita <span className="italic font-normal text-[#1A9E8F]">Kosture</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Descubre la experiencia Kosture en nuestras sucursales. Encuentra nuestras últimas colecciones y recibe atención personalizada.
                            </p>
                        </div>

                            <div className="flex flex-col gap-24 lg:gap-32">
                                {sucursales.map((tienda) => (
                                    <div key={tienda.id} className={`flex flex-col ${tienda.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-stretch`}>
                                        
                                        {/* IMAGEN DE LA TIENDA (Con efecto Hover) */}
                                        <div className="w-full lg:w-1/2 group cursor-pointer relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0 overflow-hidden bg-gray-100 shadow-xl rounded-sm flex-shrink-0">
                                            {/* Imagen Principal (Fachada) */}
                                            <img 
                                                src={tienda.imgFront} 
                                                alt={`Fachada ${tienda.imgAlt}`} 
                                                className={`absolute inset-0 w-full h-full object-cover ${tienda.imgObjectPos} transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0`}
                                            />
                                            {/* Imagen Secundaria (Interior - se muestra en hover) */}
                                            <img 
                                                src={tienda.imgInside} 
                                                alt={`Interior ${tienda.imgAlt}`} 
                                                className={`absolute inset-0 w-full h-full object-cover ${tienda.imgObjectPos} transition-transform duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100`}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                        </div>

                                        {/* INFORMACIÓN Y MAPA */}
                                        <div className="w-full lg:w-1/2 flex flex-col text-gray-800 py-4 lg:py-8">
                                            <h3 className="text-2xl font-medium tracking-[0.1em] text-[#1a2b3c] mb-6 uppercase border-b border-gray-200 pb-4">
                                                {tienda.nombre}
                                            </h3>

                                            <div className="flex flex-col space-y-6 text-base text-gray-600 font-light mb-8 flex-grow">
                                                <div className="flex items-start gap-4">
                                                    <svg className="w-6 h-6 text-[#1a2b3c] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                    <a
                                                        href={tienda.mapaUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-[#1a2b3c] hover:underline underline-offset-4 transition-colors whitespace-pre-line"
                                                    >
                                                        {tienda.direccion}
                                                    </a>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <svg className="w-6 h-6 text-[#1a2b3c] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <div className="space-y-1">
                                                        {tienda.horarios.map((horario, index) => (
                                                            <p key={index}>{horario}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <svg className="w-6 h-6 text-[#1a2b3c] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                    </svg>
                                                    <p>{tienda.telefono}</p>
                                                </div>
                                            </div>

                                            <div className="h-[250px] lg:h-[280px] w-full bg-gray-100 mb-6 rounded-sm overflow-hidden border border-gray-200 flex-shrink-0">
                                                <iframe
                                                    src={tienda.iframeSrc}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen={false}
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    title={`Ubicación de ${tienda.nombre}`}
                                                ></iframe>
                                            </div>

                                            <a
                                                href={tienda.mapaUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#1a2b3c] text-white text-center px-8 py-4 w-full text-sm font-semibold tracking-[0.15em] hover:bg-[#111d29] transition shadow-md mt-auto flex-shrink-0"
                                            >
                                                ABRIR EN GOOGLE MAPS
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
        </section>
    );
}
