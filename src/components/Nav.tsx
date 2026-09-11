import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
       <div className="flex justify-between items-center container mx-auto mt-4  sticky">
         <nav>
            <img src={Logo} alt="Logo" />
        </nav>
        <ul className="flex justify-between gap-4 items-center">
            <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">Home</li>
            <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">Technologies</li>
            <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">Projects</li>
            <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">About</li>
            <li className=" hover:text-red-500 hover:underline cursor-pointer transition duration-300">Contact</li>
        </ul>

        <ul className="flex gap-4 items-center">
            <button className="px-5 py-2 font-medium text-black hover:text-red-500 transition duration-300">Sign In</button>
            <button className="btn btn-secondary px-6 py-2 text-white font-medium rounded-full hover:shadow-lg transition duration-200">Sign Up</button>
        </ul>
       </div>
    );
};

export default Nav ;