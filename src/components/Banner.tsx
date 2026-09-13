import BannerImg from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <section id="home" className="flex justify-between items-center container mx-auto min-h-screen">
            <div className="w-1/2 max-w-xl">
                <h1 className="text-6xl font-extrabold leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-[#FF5722]  via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="mt-5 max-w-xl text-gray-500 leading-7">
                    Explore frontend, backend, database, and tooling options,
                    <br />
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex gap-4 mt-12">
                    <button className="px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-[#FF5722] to-[#D81B7E] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore Technologies
                    </button>
                    <button className="px-14 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-1/2 flex justify-end">
                <img src={BannerImg} alt="Banner Immage" />
            </div>
        </section>
    );
};

export default Banner;
