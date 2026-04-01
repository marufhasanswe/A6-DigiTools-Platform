import React from "react";

const Stats = () => {
  return (
    <div className="primary-bg">
      <div
        className="container mx-auto py-15 flex flex-col md:flex-row w-full gap-8 justify-around items-center
    "
      >
        <div className="text-white">
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-2xl mt-3">Active Users</p>
        </div>
        <div className="divider divider-horizontal divider-neutral"></div>

        <div className="text-white">
          <h2 className="text-6xl font-extrabold">200+</h2>
          <p className="text-2xl mt-3">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal divider-neutral"></div>

        <div className="text-white">
          <h2 className="text-6xl font-extrabold">4.9</h2>
          <p className="text-2xl mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
