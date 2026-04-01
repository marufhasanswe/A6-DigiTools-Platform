import React from "react";
import { DiCreativecommons } from "react-icons/di";
import Card from "../../../ui/Card";

const Products = ({ cards, cart, setCart }) => {
  return (
    <div className="container mx-auto mt-10">
      <Card cards={cards} cart={cart} setCart={setCart} />;
    </div>
  );
};

export default Products;
