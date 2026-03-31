import React from "react";
import bannerImg from "../../../assets/banner.png";
import watchIcon from "../../../assets/Play.png";
import badgeIcon from "../../../assets/badge-icon.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse container mx-auto ">
        <img src={bannerImg} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <span className="bg-[#e1e7ff] text-[#9514fa] px-4 py-2 rounded-full align-middle">
            <img className="w-4 h-4 inline-block" src={badgeIcon} alt="" /> New:
            Ai-Powered Tools Available
          </span>
          <h1 className="text-7xl font-bold text-[#101727] mt-4">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-lg/8  text-[#627382]">
            Access premium AI tools, design assets, , and productivity <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>
          <div className="flex gap-2">
            <button className="btn primary-bg text-white rounded-full py-6">
              Explore Products
            </button>
            <button className="btn border border-[#9514fa] text-[#9514fa] rounded-full py-6 flex items-center">
              <img src={watchIcon} alt="" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
