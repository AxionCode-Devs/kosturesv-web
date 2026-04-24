export default function HechoEnSV() {
    return (
        <section
            className="w-full h-[80vh] bg-cover bg-center flex items-end pb-20 px-10 md:px-20 text-white"
            style={{ backgroundImage: "url('/imagenes/hecho-en-sv.jpg')" }}
        >
            <div className="max-w-3xl">
                <h2 className="text-6xl font-bold mb-6">Hecho en El Salvador</h2>
                <p className="text-xl mb-8">Detalles con Técnica artesanal que te acompañaran en tus aventuras.</p>
                <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-gray-200">
                    Conoce más
                </button>
            </div>
        </section>
    );
}