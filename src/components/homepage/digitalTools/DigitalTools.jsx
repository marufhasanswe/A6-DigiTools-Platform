import React, { use, useState } from "react";
import SectionHeading from "../../ui/SectionHeading";
import Products from "./products/Products";
import TogglingButtons from "./togglingButtons/TogglingButtons";
import Cart from "../cart/Cart";

const DigitalTools = ({ dataPromises, cart, setCart }) => {
  const cards = use(dataPromises);
  const [togglingStatus, setTogglingStatus] = useState("products");
  return (
    <div className="container mx-auto">
      <SectionHeading />
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
