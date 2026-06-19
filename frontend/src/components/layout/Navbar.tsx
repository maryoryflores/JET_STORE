import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="JetStore Digital"
                    width={60}
                    height={60}
                    priority
                />

                <div>
                    <h1 className="text-2xl font-bold text-red-600">
                        JetStore Digital
                    </h1>
                </div>
            </div>

            {/* Menú */}
            <ul className="flex gap-8 text-sm font-medium">
                <li>
                    <a href="#" className="hover:text-red-500 transition">
                        Inicio
                    </a>
                </li>

                <li>
                    <a href="#" className="hover:text-red-500 transition">
                        Catálogo
                    </a>
                </li>

                <li>
                    <a href="#" className="hover:text-red-500 transition">
                        Contacto
                    </a>
                </li>

                <li>
                    <a href="#" className="hover:text-red-500 transition">
                        Ingresar
                    </a>
                </li>
            </ul>
        </nav>
    );
}