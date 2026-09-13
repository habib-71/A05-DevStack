import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { ITechnologies } from "./types/TechnologiesCardTypes";
import Footer from "./components/Footer";

const technologiesFetch = async ():Promise<ITechnologies[]> => {
const res = await fetch('/data.json');
  const data=await res.json();
  return data;
}

function App() {
  const technologiesPromise=technologiesFetch();
  return (
    <>

      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading......</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>

      
    </>
  )
}

export default App
