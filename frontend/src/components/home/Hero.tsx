export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-red-700 via-red-600 to-black text-white py-24">
            <h1 className="text-5xl font-bold mb-6">
                Compra Libros Digitales al Instante
            </h1>

            <p className="text-xl mb-8">
                Accede a cientos de PDFs educativos y profesionales desde cualquier dispositivo.
            </p>

            <a
                href="/catalogo"
                className="bg-white text-red-600 font-semibold hover:bg-red-100 transition"
            >
                Explorar Catálogo
            </a>
        </section>
    );
}