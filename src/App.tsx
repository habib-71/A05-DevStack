import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { ITechnologies } from "./types/TechnologiesCardTypes";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnologies[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};

function App() {
    const technologiesPromise = technologiesFetch();

    return (
      <>
      <Nav />
        <div className="px-3">
          
            <Banner />

            <Suspense
                fallback={
                    <div className="container mx-auto flex min-h-75 items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500"></div>

                            <p className="text-sm font-medium text-gray-500">
                                Loading technologies...
                            </p>
                        </div>
                    </div>
                }
            >
                <Technologies
                    technologiesPromise={technologiesPromise}
                />
            </Suspense>

            <Footer />
        </div>
        </>
    );
}

export default App;