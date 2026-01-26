import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { label: "Home", path: "/home" },
        { label: "Produtos", path: "/produtos" },
        { label: "Receitas", path: "/receitas" },
        { label: "Sobre", path: "/sobre" }
    ];

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav
            className="sticky top-0 z-50 bg-off-white shadow-md"
            role="navigation"
            aria-label="Navegação principal"
        >
            <div className="max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <div className="md:-ml-35">
                        <Link
                            to="/home"
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            aria-label="Ir para a página inicial"
                        >
                            <img
                                src={logo}
                                alt="Logo Healthy Food"
                                className="h-10 w-10"
                            />
                            <span className="text-2xl font-bold text-olive-green">
                                Healthy Food
                            </span>
                            <Leaf className="w-8 h-8 text-olive-green" />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="relative group text-gray-700 hover:text-olive-green transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Alternar menu"
                        aria-expanded={isMenuOpen}
                        className="md:hidden text-gray-700 hover:text-olive-green transition-colors duration-200"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <ul className="md:hidden mt-4 pb-4 space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={closeMenu}
                                    className="block py-2 text-gray-700 hover:text-olive-green transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;