import Logo from "../assets/logo-text.png";
const Nav = () => {
    return (
   <nav className="border-b border-gray-300 shadow-sm sticky top-0 bg-white z-50 p-5">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="flex justify-between gap-4 items-center">
                <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">
                    Home
                </li>
                <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">
                    Technologies
                </li>
                <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">
                    Projects
                </li>
                <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">
                    About
                </li>
                <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">
                    Contact
                </li>
            </ul>

            <ul className="flex gap-4 items-center">
                <button className="px-5 py-2 font-medium text-black hover:text-red-500  transition duration-300">
                    Sign In
                </button>
                <button className="btn btn-secondary px-6 py-2 text-white font-medium rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-200">
                    Sign Up
                </button>
            </ul>
            </div>
   </nav>
    );
};

export default Nav;
