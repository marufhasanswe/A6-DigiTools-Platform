import React, { use, useState } from "react";
import SectionHeading from "../../ui/SectionHeading";
import Products from "./products/Products";
import TogglingButtons from "./togglingButtons/TogglingButtons";
import Cart from "../cart/Cart";

const DigitalTools = ({ dataPromises, cart, setCart }) => {
  const cards = use(dataPromises);
  const [togglingStatus, setTogglingStatus] = useState("products");
  const sectionHeading = `Premium Digital Tools`;
  const sectionDesc = `Choose from our curated collection of premium digital products designed
to boost your productivity and creativity.`;

  return (
    <div className="container mx-auto p-4">
      <SectionHeading
        sectionHeading={sectionHeading}
        sectionDesc={sectionDesc}
      />
      <TogglingButtons
        togglingStatus={togglingStatus}
        setTogglingStatus={setTogglingStatus}
        cart={cart}
      />
      {togglingStatus === "products" ? (
        <Products cards={cards} cart={cart} setCart={setCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default DigitalTools;
