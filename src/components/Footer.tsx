import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer id="footer" className="border-t border-gray-200 mt-10 px-4 md:px-6 py-10 md:py-12">

            {/* Footer Main */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10 md:pb-12 container mx-auto border-b border-gray-300">

                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-1">

                    <img src={Logo} alt="Logo" className="w-32" />

                    <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="flex flex-wrap gap-5 mt-6">
                        <a target="_blank" rel="noreferrer" href="https://github.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">
                            GitHub
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://twitter.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">
                            Twitter
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://linkedin.com" className="text-sm font-bold hover:text-red-400 hover:scale-105 transition duration-200">
                            LinkedIn
                        </a>
                    </div>

                </div>


                {/* Product */}
                <div>

                    <h3 className="font-semibold tracking-wider text-gray-900">
                        PRODUCT
                    </h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#home" className="hover:text-gray-600 hover:font-bold transition-all">
                            Home
                        </a>

                        <a href="#technologies" className="hover:text-gray-600 hover:font-bold transition-all">
                            Technologies
                        </a>

                        <a href="#home" className="hover:text-gray-600 hover:font-bold transition-all">
                            Projects
                        </a>
                    </div>

                </div>


                {/* Company */}
                <div>

                    <h3 className="font-semibold tracking-wider text-gray-900">
                        COMPANY
                    </h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-600 hover:font-bold transition-all">
                            About
                        </a>

                        <a href="#" className="hover:text-gray-600 hover:font-bold transition-all">
                            Contact
                        </a>

                        <a href="#" className="hover:text-gray-600 hover:font-bold transition-all">
                            Careers
                        </a>
                    </div>

                </div>


                {/* Legal */}
                <div>

                    <h3 className="font-semibold tracking-wider text-gray-900">
                        LEGAL
                    </h3>

                    <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-600 hover:font-bold transition-all">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-gray-600 hover:font-bold transition-all">
                            Terms of Service
                        </a>
                    </div>

                </div>

            </div>


            {/* Footer Bottom */}
            <div className="mt-2 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 container mx-auto">

                <p className="text-sm text-gray-400 text-center md:text-left">
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