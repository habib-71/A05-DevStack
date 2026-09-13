import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="border-b border-gray-300 shadow-sm sticky top-0 bg-white z-50 py-5">
            <div className="flex justify-between items-center container mx-auto">

                <div>
                    <a href="#home">
                        <img src={Logo} alt="Dev Stack" />
                    </a>
                </div>

                <ul className="flex gap-6 items-center">
                    <li>
                        <a
                            href="#home"
                            className="text-gray-600 hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#technologies"
                            className="text-gray-600 hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#home"
                            className="text-gray-600 hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#footer"
                            className="text-gray-600 hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#footer"
                            className="text-gray-600 hover:text-red-500 hover:underline underline-offset-4 transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex gap-4 items-center">
                    <button className="px-5 py-2 font-medium text-gray-700 hover:text-red-500 transition-colors duration-300">
                        Sign In
                    </button>

                    <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-full shadow-md hover:bg-red-600 hover:shadow-xl hover:scale-[1.03] transition-all duration-200">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;