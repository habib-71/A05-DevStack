import { use } from "react";
import type { ITechnologies } from "../types/TechnologiesCardTypes";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
    technologiesPromise:Promise<ITechnologies[]>
}
const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies=use(technologiesPromise);
    console.log(technologies);
    return (
        <div id="technologies" className="container mx-auto">
            <div>
                <h2 className="text-4xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="mt-5 max-w-xl text-gray-500 leading-1">Pick one technology per category to build your ideal stack.</p>
            </div>
                <TechnologiesCard technologies={technologies}></TechnologiesCard>
            <div>

            </div>
        </div>
    );
};

export default Technologies;