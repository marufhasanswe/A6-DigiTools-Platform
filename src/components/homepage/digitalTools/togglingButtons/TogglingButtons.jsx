import React from "react";

const TogglingButtons = ({ togglingStatus, setTogglingStatus, cart }) => {
  const handleTogglingBtn = (status) => {
    setTogglingStatus(status);
  };
  return (
    <div className="flex justify-center ">
      <div className="flex items-center gap-2">
        <button
          className={`btn border border-[#9514fa] text-[#9514fa] ${togglingStatus === "products" && "primary-bg text-white"} rounded-3xl px-4 py-2 text-[16px]`}
          onClick={() => handleTogglingBtn("products")}
        >
          Products
        </button>
        <button
          className={`btn border border-[#9514fa] text-[#9514fa] rounded-3xl px-4 py-2 flex items-center text-[16px] ${togglingStatus === "cart" && "primary-bg text-white"}`}
          onClick={() => handleTogglingBtn("cart")}
        >
          Cart ({cart.length})
        </button>
      </div>
    </div>
  );
};

export default TogglingButtons;
