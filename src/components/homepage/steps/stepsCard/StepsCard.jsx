import React from "react";
import userImg from "../../../../assets/user.png";
import packageImg from "../../../../assets/package.png";
import rocketImg from "../../../../assets/rocket.png";

const StepsCard = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-3 py-10 gap-8">
      <div className=" rounded-xl bg-white border border-base-300 px-6 py-22 text-center space-y-4 relative">
        <span className=" p-3 rounded-full bg-primary text-white text-sm font-semibold absolute top-4 right-4">
          01
        </span>
        <img
          src={userImg}
          alt=""
          className="w-24 h-24 bg-base-300 mx-auto rounded-full px-6 py-6"
        />
        <h3 className="text-2xl font-semibold">Create Account</h3>
        <p className="text-[#627382FF] text-[16px]">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>
      <div className=" rounded-xl bg-white border border-base-300 px-6 py-22 text-center space-y-4 relative">
        <span className=" p-3 rounded-full bg-primary text-white text-sm font-semibold absolute top-4 right-4">
          02
        </span>
        <img
          src={packageImg}
          alt=""
          className="w-24 h-24 bg-base-300 mx-auto rounded-full px-6 py-6"
        />
        <h3 className="text-2xl font-semibold">Choose Products</h3>
        <p className="text-[#627382FF] text-[16px]">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>
      <div className=" rounded-xl bg-white border border-base-300 px-6 py-22 text-center space-y-4 relative">
        <span className=" p-3 rounded-full bg-primary text-white text-sm font-semibold absolute top-4 right-4">
          03
        </span>
        <img
          src={rocketImg}
          alt=""
          className="w-24 h-24 bg-base-300 mx-auto rounded-full px-6 py-6"
        />
        <h3 className="text-2xl font-semibold">Start Creating</h3>
        <p className="text-[#627382FF] text-[16px]">
          Download and start using your premium tools immediately.
        </p>
      </div>
    </div>
  );
};

export default StepsCard;
