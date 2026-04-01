import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import DigitalTools from "./components/homepage/digitalTools/DigitalTools";
import Stats from "./components/homepage/stats/Stats";
import NavBar from "./components/navBar/NavBar";
import SectionHeading from "./components/ui/SectionHeading";

const fetchData = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

function App() {
  const dataPromises = fetchData();
  return (
    <>
      <NavBar />
      <Banner />
      <Stats />
      <SectionHeading />
      <Suspense
        fallback={<span className="loading loading-spinner loading-md "></span>}
      >
        <DigitalTools dataPromises={dataPromises} />
      </Suspense>
    </>
  );
}

export default App;
