import React from "react";

const TogglingButtons = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center gap-2">
        <button className="btn primary-bg text-white rounded-3xl px-4 py-2 text-[16px]">
          Products
        </button>
        <button className="btn border border-[#9514fa] text-[#9514fa] rounded-3xl px-4 py-2 flex items-center text-[16px]">
          Cart (0)
        </button>
      </div>
    </div>
  );
};

export default TogglingButtons;
