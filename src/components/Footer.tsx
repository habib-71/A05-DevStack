import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer id="footer" className="border-t border-gray-200 mt-10 px-6 py-12">
            <div className="grid grid-cols-4 gap-12 pb-12 container mx-auto border-b border-gray-300">
                <div>
                    <img src={Logo} alt="Logo" />

                    <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="flex gap-5 mt-6">
                        <a target="_blank" href="https://github.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">GitHub</a>
                        <a target="_blank" href="https://twitter.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">Twitter</a>
                        <a target="_blank" href="https://linkedin.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold tracking-wider text-gray-900">
                        PRODUCT
                    </h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#home" className="hover:text-gray-600 hover:font-bold transition-colors">Home</a>
                        <a href="#technologies" className="hover:text-gray-600 hover:font-bold transition-colors">Technologies</a>
                        <a href="#home" className="hover:text-gray-600 hover:font-bold transition-colors">Projects</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold tracking-wider text-gray-900">COMPANY</h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold tracking-wider text-gray-900">LEGAL</h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className="mt-2 pt-6 flex justify-between items-center container mx-auto">

                <p className="text-sm text-gray-400">
                    © 2026 Dev Stack. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        Privacy
                    </a>

                    <a href="#" className="hover:text-gray-900 transition-colors">
                        Terms
                    </a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
