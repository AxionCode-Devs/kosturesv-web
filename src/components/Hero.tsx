import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === img1Ref.current) setIsVisible1(true);
                        if (entry.target === img2Ref.current) setIsVisible2(true);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (img1Ref.current) observer.observe(img1Ref.current);
        if (img2Ref.current) observer.observe(img2Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-white overflow-hidden">

            {/* 1. EL BANNER - Con espacio abajo (mb-16) */}
            <div className="w-full h-[60vh] relative overflow-hidden mb-16 shadow-inner group">
                <img
                    src="/imagenes/wmremove-transformed.png" // Tu imagen horizontal
                    alt="Stand Makers Market"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay con degradado para asegurar la lectura del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/30 to-transparent flex flex-col justify-end p-8 md:p-16 lg:p-24">
                    <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
                        Hecho en El Salvador
                    </h2>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl max-w-4xl font-light drop-shadow-md opacity-95">
                        Detalles con Técnica artesanal que te acompañaran en tus aventuras
                    </p>
                </div>
            </div>

            {/* 2. LA HISTORIA - Ahora separada por el mb-16 de arriba */}
            <div className="w-full flex items-center px-10 md:px-20 py-16 gap-16 max-w-7xl mx-auto">

                {/* IMAGEN IZQUIERDA */}
                <div
                    ref={img1Ref}
                    className={`w-1/2 transform transition-all duration-1000 ease-out ${isVisible1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
                >
                    <img
                        src="/imagenes/kosture.jpg" // Tu imagen vertical
                        alt="Nuestra artesanía"
                        className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* TEXTO DERECHA */}
                <div className="w-1/2 flex flex-col justify-center">
                    <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-3">
                        Nuestra historia
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                        El encuentro que cambió todo
                    </h1>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg max-w-xl text-justify">
                        <p>
                            Kosture nació de un encuentro fortuito y un sueño compartido. Karen, Rebeca y Olga, tres mujeres que repartían sus días entre las responsabilidades del hogar y la crianza, se conocieron en un curso de corte y confección impartido en la sede de Ciudad Mujer en San Martín.
                        </p>
                        <p>
                            Allí, entre patrones, telas y el constante ritmo de las máquinas, no solo aprendieron un oficio técnico; encontraron una vocación. Lo que comenzó como un pequeño proyecto individual se convirtió rápidamente en una aspiración colectiva: la idea de formar una microempresa propia que les permitiera no solo obtener ingresos para sus familias, sino también demostrar su capacidad de gestión y creación.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. CONTINUACIÓN DE LA HISTORIA - Imagen a la derecha */}
            <div className="w-full flex items-start px-10 md:px-20 py-16 gap-16 max-w-7xl mx-auto">

                {/* TEXTO IZQUIERDA */}
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        Del esfuerzo a la consolidación
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg max-w-xl text-justify mb-8">
                        <p>
                            Los inicios no fueron sencillos. Con una sola máquina de coser y aportaciones modestas de cada una, comenzaron a confeccionar los primeros productos que ofrecían entre vecinos y conocidos. Sin embargo, su empeño llamó la atención de las autoridades de Ciudad Mujer, quienes les brindaron la oportunidad de exponer sus creaciones en ferias. Ese fue el punto de inflexión.
                        </p>
                        <p>
                            En cuestión de meses, gracias a la capacitación recibida en temas de emprendimiento, contabilidad y creación de marca, lograron multiplicar su capacidad productiva. Lo que antes era un trabajo de costura en menor escala, se profesionalizó hasta convertirse en una microempresa capaz de gestionar carteras de clientes formales y participar en licitaciones de alto nivel.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 pt-6 mb-2">Nuestra esencia hoy</h3>
                        <p>
                            Hoy, Kosture es mucho más que ropa de cama y accesorios; es el testimonio vivo de que, con acompañamiento y determinación, las mujeres emprendedoras pueden romper barreras. Cada una de nuestras piezas es elaborada con técnicas artesanales que preservan nuestra identidad y valoran el trabajo hecho a mano en El Salvador.
                        </p>
                        <p>
                            Para nosotras, Kosture es una bendición y una invitación a otras mujeres a creer en su propio potencial. Al elegir uno de nuestros productos, no solo te llevas un artículo de calidad a casa, sino que también apoyas un proyecto que transforma vidas, fortalece nuestra cultura y celebra la maestría de manos salvadoreñas que decidieron, hace tiempo, empezar a soñar en grande.
                        </p>
                    </div>
                    <button className="bg-black text-white px-10 py-3 w-fit text-sm font-semibold hover:bg-gray-800 transition rounded-sm uppercase tracking-wider">
                        Ver productos
                    </button>
                </div>

                {/* IMAGEN DERECHA */}
                <div
                    ref={img2Ref}
                    className={`w-1/2 mt-8 transform transition-all duration-1000 ease-out ${isVisible2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
                >
                    <img
                        src="/imagenes/kostur2.jpg" // Cambia esta ruta por la de tu nueva imagen
                        alt="Nuestra pasión"
                        className="w-full h-[850px] object-cover rounded-lg shadow-lg"
                    />
                </div>

            </div>

            {/* 4. CATEGORÍAS DESTACADAS - Dos imágenes lado a lado */}
            <div className="w-full flex flex-col md:flex-row gap-4 px-4 md:px-10 pb-16 max-w-[1400px] mx-auto">

                {/* CATEGORÍA 1 */}
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[550px] group overflow-hidden cursor-pointer">
                    <img
                        src="/imagenes/monederos.jpg" // Cambia por tu imagen de cojines
                        alt="Monederos"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay oscuro para leer el texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                        <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-2">
                            Hecho a mano
                        </span>
                        <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-6 drop-shadow-md">
                            Monederos
                        </h3>
                        <button className="bg-white text-black px-6 py-3 w-fit text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition">
                            Ver productos
                        </button>
                    </div>
                </div>

                {/* CATEGORÍA 2 */}
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[550px] group overflow-hidden cursor-pointer">
                    <img
                        src="/imagenes/cartera_trensada.png" // Cambia por tu imagen de mantas
                        alt="Mantas"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay oscuro para leer el texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                        <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-2">
                            Hecho a mano
                        </span>
                        <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-6 drop-shadow-md">
                            Cartera trenzada
                        </h3>
                        <button className="bg-white text-black px-6 py-3 w-fit text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition">
                            Ver productos
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
}