import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navigationItems = [
        { label: "Home", path: "/home" },
        { label: "Produtos", path: "/produtos" },
        { label: "Receitas", path: "/receitas" },
        { label: "Sobre", path: "/sobre" }
    ];

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`backdrop-blur-xs fixed top-0 left-0 right-0 z-50 bg-off-white shadow-md py-1 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
            role="navigation"
            aria-label="Navegação principal"
        >
            <div className="max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between">
                    
                    <div className="md:-ml-8">
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
                            <span className="text-2xl font-bold text-white hover:text-[#66BB77]">
                                Healthy Food
                            </span>
                            <Leaf className="w-8 h-8 text-[#66BB77]" />
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="relative group text-white hover:text-[#66BB77] transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Alternar menu"
                        aria-expanded={isMenuOpen}
                        className="md:hidden text-white hover:text-[#66BB77] transition-colors duration-200"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <ul className="md:hidden mt-4 pb-4 space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={closeMenu}
                                    className="block py-2 text-white hover:text-[#66BB77] transition-colors duration-200 font-medium"
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