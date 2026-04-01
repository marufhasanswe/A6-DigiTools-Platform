import React from "react";

const SectionHeading = ({ sectionHeading, sectionDesc }) => {
  return (
    <div className="mt-16 md:pt-30 container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        {sectionHeading}
      </h2>
      <p className="text-center text-[#627382] text-[16px] leading-tight my-4 max-w-lg mx-auto">
        {sectionDesc}
      </p>
    </div>
  );
};

export default SectionHeading;
