import React from "react";
import { DiCreativecommons } from "react-icons/di";
import Card from "../../../ui/Card";

const Products = ({ cards, cart, setCart }) => {
  return <Card cards={cards} cart={cart} setCart={setCart} />;
};

export default Products;
