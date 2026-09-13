import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ITechnologies } from "../types/TechnologiesCardTypes";

interface TechnologiesCardProps {
    technologies: ITechnologies[];
}

const TechnologiesCard = ({ technologies }: TechnologiesCardProps) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnologies[]>([]);

    const handleAddToStack = (technology: ITechnologies) => {
        const isAlreadySelected = selectedTechnologies.some(
            (selected) => selected.id === technology.id
        );

        if (isAlreadySelected) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setSelectedTechnologies((prev) => [...prev, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id: string | number) => {
        const technology = selectedTechnologies.find(
            (technology) => String(technology.id) === String(id)
        );

        setSelectedTechnologies((prev) =>
            prev.filter((technology) => String(technology.id) !== String(id))
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack!`);
        }
    };

    const handleRemoveAll = () => {
        if (selectedTechnologies.length === 0) {
            return;
        }

        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack!");
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
                            className={`border rounded-2xl p-4 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isSelected
                                ? "border-red-400 bg-red-50/30 shadow-md"
                                : "border-gray-200"
                                }`}
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

                            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                                {technology.name}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {technology.description}
                            </p>

                            <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-5">
                                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100 whitespace-nowrap">
                                    {technology.category}
                                </span>

                                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100 whitespace-nowrap">
                                    {technology.difficulty}
                                </span>

                                <span className="px-3 py-1 rounded-full bg-yellow-50 text-black text-xs font-medium border border-yellow-100 whitespace-nowrap">
                                    ⭐ {technology.rating}
                                </span>
                            </div>

                            <button
                                onClick={() => handleAddToStack(technology)}
                                disabled={isSelected}
                                className={`w-full mt-5 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 ${isSelected
                                    ? "bg-gray-400 hover:bg-gray-500"
                                    : "bg-brand-gradient shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
                                    }`}
                            >
                                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                            </button>
                        </div>
                    );
                })}

            </div>

            {/* Stack Card */}
            <div className="w-full lg:w-[30%] lg:sticky lg:top-24 self-start border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h2 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    {selectedTechnologies.length === 0
                        ? "No technology selected"
                        : `${selectedTechnologies.length} ${selectedTechnologies.length === 1
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
                                    title={`Remove ${technology.name}`}
                                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                                >
                                    ✕
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
                    </div>
                )}

            </div>

            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default TechnologiesCard;