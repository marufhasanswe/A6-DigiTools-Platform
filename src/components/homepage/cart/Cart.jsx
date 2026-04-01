import React from "react";

const Cart = ({ cart, setCart }) => {
  const totalCartPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleRemoveBtn = (cartItem) => {
    const newCart = cart.filter((product) => product.id != cartItem.id);
    setCart(newCart);
  };
  return (
    <div className="space-y-4 p-10 mt-10 border border-base-300 rounded-2xl mb-32">
      <h4 className="text-2xl font-semibold">Your Cart</h4>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <div className="flex items-center justify-between p-4   rounded-2xl bg-base-200">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-15 h-15" src={cartItem.icon} alt="" />
              </div>
              <div>
                <h3 className="text-lg md:text-[20px] font-semibold text-[#101727FF;]">
                  {cartItem.name}
                </h3>
                <p className="text-[16px] font-semibold text-[#627382FF]">
                  ${cartItem.price}
                </p>
              </div>
            </div>
            <button
              className="btn btn-ghost text-red-600"
              onClick={() => handleRemoveBtn(cartItem)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center px-2">
        <p className="text-[16px] text-[#627382FF]">Total: </p>
        <p className="text-2xl text-[#101727FF] font-semibold">
          ${totalCartPrice.toFixed(2)}
        </p>
      </div>
      <button
        className="btn btn-primary py-5 w-full rounded-full"
        onClick={() => setCart([])}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
