import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section id="home" className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 container mx-auto min-h-screen px-4 md:px-6 py-12 lg:py-0">

            {/* Banner Content */}
            <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Build Your Ideal <br />

                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-5 text-sm sm:text-base text-gray-600 leading-7">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 lg:mt-12">

                    <button className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-[#FF5722] to-[#D81B7E] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore Technologies
                    </button>

                    <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        Learn More
                    </button>

                </div>

            </div>

            {/* Banner Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                <img
                    src={BannerImg}
                    alt="Development stack illustration"
                    className="w-full max-w-md sm:max-w-lg lg:max-w-xl drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />

            </div>

        </section>
    );
};

export default Banner;