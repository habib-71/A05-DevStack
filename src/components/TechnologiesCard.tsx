import type { ITechnologies } from "../types/TechnologiesCardTypes";

interface TechnologiesCardProps {
    technologies: ITechnologies[];
}
const TechnologiesCard = ({ technologies }: TechnologiesCardProps) => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-6">
            {technologies.map((technology: ITechnologies) => {
                return (

                    <div key={technology.id}className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100">
                                <img
                                    className="w-8 h-8"
                                    src={technology.icon}
                                    alt={technology.name}
                                />
                            </div>

                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-50 text-pink-600 border border-pink-100">
                                {technology.badge}
                            </span>
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-gray-900">
                            {technology.name}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            {technology.description}
                        </p>

                        <div className="flex flex-wrap justify-between gap-2 mt-5">
                            <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100">
                                {technology.category}
                            </span>

                            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100">
                                {technology.difficulty}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-xs font-medium border border-yellow-100">
                                ⭐ {technology.rating}
                            </span>
                        </div>
                        <button className="w-full mt-5 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-[#FF5722] to-[#D81B7E] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                            Add to Stack
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TechnologiesCard;
