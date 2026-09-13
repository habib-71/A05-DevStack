import { useState } from "react";
import type { ITechnologies } from "../types/TechnologiesCardTypes";

interface TechnologiesCardProps {
    technologies: ITechnologies[];
}

const TechnologiesCard = ({ technologies }: TechnologiesCardProps) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnologies[]>([]);

    const handleAddToStack = (technology: ITechnologies) => {
        setSelectedTechnologies((prev) => [...prev, technology]);
    };

    const handleRemoveFromStack = (id: string | number) => {
        setSelectedTechnologies((prev) =>
            prev.filter((technology) => String(technology.id) !== String(id))
        );
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 mt-6">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-[70%] gap-6">

                {technologies.map((technology: ITechnologies) => {

                    const isSelected = selectedTechnologies.some(
                        (selected) => selected.id === technology.id
                    );

                    return (
                        <div
                            key={technology.id}
                            className="border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >

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

                            <h2 className="mt-5 md:mt-6 text-xl md:text-2xl font-bold text-gray-900">
                                {technology.name}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {technology.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">

                                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100">
                                    {technology.category}
                                </span>

                                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100">
                                    {technology.difficulty}
                                </span>

                                <span className="px-3 py-1 rounded-full bg-yellow-50 text-black text-xs font-medium border border-yellow-100">
                                    ⭐ {technology.rating}
                                </span>

                            </div>

                            <button
                                onClick={() => handleAddToStack(technology)}
                                disabled={isSelected}
                                className={`w-full mt-5 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 ${
                                    isSelected
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-linear-to-r from-[#FF5722] to-[#D81B7E] shadow-sm hover:shadow-md hover:scale-[1.02]"
                                }`}
                            >
                                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                            </button>

                        </div>
                    );
                })}

            </div>


            {/* Stack Card */}
            <div className="w-full lg:w-[30%] self-start border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-bold text-gray-900">
                        Your Stack
                    </h2>

                    <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold">
                        {selectedTechnologies.length}
                    </span>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                    {selectedTechnologies.length === 0
                        ? "No technology selected"
                        : `${selectedTechnologies.length} ${
                              selectedTechnologies.length === 1
                                  ? "technology"
                                  : "technologies"
                          } selected`}
                </p>


                {/* Selected Technologies */}
                {selectedTechnologies.length > 0 && (

                    <div className="mt-5 space-y-3">

                        {selectedTechnologies.map((technology) => (

                            <div
                                key={technology.id}
                                className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl p-3"
                            >

                                <div className="flex items-center gap-3 min-w-0">

                                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                                        <img
                                            className="w-7 h-7"
                                            src={technology.icon}
                                            alt={technology.name}
                                        />
                                    </div>

                                    <div className="min-w-0">

                                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                                            {technology.name}
                                        </h3>

                                        <p className="text-xs text-gray-500 truncate">
                                            {technology.category}
                                        </p>

                                    </div>

                                </div>

                                <button
                                    onClick={() => handleRemoveFromStack(technology.id)}
                                    className="shrink-0 text-xs font-medium text-red-500 hover:text-red-600"
                                >
                                    Remove
                                </button>

                            </div>

                        ))}


                        <button
                            onClick={handleRemoveAll}
                            className="w-full mt-4 border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-medium text-sm py-3 rounded-xl transition-all duration-300"
                        >
                            Remove All
                        </button>

                    </div>
                )}


                {/* Empty State */}
                {selectedTechnologies.length === 0 && (

                    <div className="mt-5 border border-dashed border-gray-300 rounded-xl p-8 text-center">

                        <h3 className="text-sm font-semibold text-gray-700">
                            Your stack is empty
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                            Add technologies to build your stack
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};

export default TechnologiesCard;