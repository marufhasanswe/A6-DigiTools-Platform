import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import DigitalTools from "./components/homepage/digitalTools/DigitalTools";
import Stats from "./components/homepage/stats/Stats";
import NavBar from "./components/navBar/NavBar";
import SectionHeading from "./components/ui/SectionHeading";
import Steps from "./components/homepage/steps/Steps";
import Pricing from "./components/homepage/pricing/Pricing";
import Footer from "./components/footer/Footer";

const fetchData = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

function App() {
  const dataPromises = fetchData();
  const [cart, setCart] = useState([]);
  return (
    <>
      <NavBar cart={cart} />
      <Banner />
      <Stats />
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-md text-center"></span>
        }
      >
        <DigitalTools
          dataPromises={dataPromises}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
