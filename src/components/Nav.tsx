import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Home");

    const menuItems = [
        { name: "Home", link: "#home" },
        { name: "Technologies", link: "#technologies" },
        { name: "Projects", link: "#home" },
        { name: "About", link: "#footer" },
        { name: "Contact", link: "#footer" },
    ];

    const handleMenuClick = (item: string) => {
        setActiveMenu(item);
        setIsMenuOpen(false);
    };

    return (
        <nav className="border-b border-gray-300 shadow-sm sticky top-0 bg-white z-50 py-4">
            <div className="container mx-auto px-4">

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center justify-between">

                    <a href="#home">
                        <img src={Logo} alt="Dev Stack" />
                    </a>

                    <ul className="flex gap-6 items-center">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.link}
                                    onClick={() => setActiveMenu(item.name)}
                                    className={`transition-all duration-300 ${activeMenu === item.name
                                            ? "text-red-500 font-semibold"
                                            : "text-gray-600 hover:text-red-500"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        {/* Sign In */}
                        <button className="text-sm font-medium text-gray-700 hover:text-red-500 active:scale-95 transition-all duration-200">
                            Sign In
                        </button>

                        {/* User Icon */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-red-500 active:scale-90 transition-all duration-200">
                            <i className="fa-regular fa-user"></i>
                        </button>

                        {/* Sign Up */}
                        <button className="px-3 py-2 text-sm bg-brand-gradient text-white font-medium rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-200">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="grid grid-cols-3 items-center md:hidden">

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="justify-self-start w-10 h-10 flex items-center justify-center rounded-full text-2xl text-gray-700 hover:bg-gray-100 active:scale-90 transition-all duration-200"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>

                    {/* Logo */}
                    <a href="#home" className="justify-self-center">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="w-24"
                        />
                    </a>

                    {/* Mobile Auth Buttons */}
                    <div className="flex items-center gap-2 justify-self-end">

                        {/* Sign In */}
                        <button className="text-xs font-medium text-gray-700 hover:text-red-500 active:scale-95 transition-all duration-200">
                            Sign In
                        </button>

                        {/* Sign Up */}
                        <button
                            className="px-3 py-2 text-xs bg-brand-gradient text-white font-medium rounded-full whitespace-nowrap shadow-sm hover:shadow-md active:scale-90 active:shadow-inner transition-all duration-150"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
                            ? "max-h-96 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                        }`}
                >
                    <ul className="flex flex-col gap-1 border-t border-gray-200 pt-3">

                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.link}
                                    onClick={() => handleMenuClick(item.name)}
                                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${activeMenu === item.name
                                            ? "bg-red-50 text-red-500 font-semibold"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-red-500"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Nav;