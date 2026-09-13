import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 min-h-screen px-4 md:px-6 py-16 lg:py-0"
        >

            <div className="absolute -top-32 -left-32 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl -z-10"></div>



            <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    Build Your Ideal <br />

                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>


                <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base text-gray-600 leading-7">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>



                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-9">

                    <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-semibold bg-brand-gradient shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                        Explore Technologies
                    </button>

                    <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-gray-300 bg-white/70 font-semibold text-gray-700 hover:bg-white hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        Learn More
                    </button>

                </div>

            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                <img
                    src={BannerImg}
                    alt="Development stack illustration"
                    className="w-[75%] sm:w-[65%] lg:w-full max-w-md lg:max-w-xl drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                />

            </div>

        </section>
    );
};

export default Banner;