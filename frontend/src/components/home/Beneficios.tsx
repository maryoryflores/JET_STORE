export default function Beneficios() {
    return (
        <section className="py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
                ¿Por qué elegir JetStore?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="shadow-lg p-6 rounded-xl">
                    <h3 className="font-bold mb-2">Entrega Inmediata</h3>
                    <p>Descarga tus PDFs al instante.</p>
                </div>

                <div className="shadow-lg p-6 rounded-xl">
                    <h3 className="font-bold mb-2">Pago Seguro</h3>
                    <p>Protección de datos y compras seguras.</p>
                </div>

                <div className="shadow-lg p-6 rounded-xl">
                    <h3 className="font-bold mb-2">Acceso Permanente</h3>
                    <p>Tus compras estarán disponibles siempre.</p>
                </div>
            </div>
        </section>
    );
}