import ScrollReveal from "./ScrollReveal";

export default function Ubicacion() {
    return (
        <section>
            {/* SECCIÓN DE UBICACIÓN */}
            <div className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
                <ScrollReveal>
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                        {/* MAPA (Izquierda) */}
                        <div className="w-full lg:w-3/5 h-[350px] md:h-[500px] bg-gray-100">
                            {/* Iframe genérico de El Salvador, el usuario lo puede cambiar si tiene el embed code exacto */}
                            <iframe
                                src="https://maps.google.com/maps?q=Centro%20Comercial%20Galerias%2C%20San%20Salvador%2C%20El%20Salvador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Kosture en Galerías"
                            ></iframe>
                        </div>

                        {/* INFORMACIÓN (Derecha) */}
                        <div className="w-full lg:w-2/5 flex flex-col text-gray-800">
                            <h2 className="text-xl font-medium tracking-[0.2em] text-[#1a2b3c] mb-10 uppercase">
                                Visita Kosture
                            </h2>

                            <div className="flex flex-col space-y-6 text-sm md:text-base text-gray-600 font-light">
                                {/* Dirección como enlace */}
                                <a
                                    href="https://maps.app.goo.gl/kRiBsGxDBHp9zDwaA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#1a2b3c] hover:underline underline-offset-4 transition-colors cursor-pointer w-fit"
                                >
                                    Centro comercial Galerias 3° nivel, San Salvador
                                </a>

                                {/* Horarios */}
                                <div className="space-y-1">
                                    <p>Lunes - Viernes, 9am - 6pm</p>
                                    <p>Sábado, 9am - 1pm</p>
                                </div>

                                {/* Teléfono */}
                                <p>Teléfono: +503 7027 9536</p>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/kRiBsGxDBHp9zDwaA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1a2b3c] text-white text-center px-8 py-3 mt-10 w-fit text-xs font-semibold tracking-[0.15em] hover:bg-[#111d29] transition"
                            >
                                CÓMO LLEGAR
                            </a>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
