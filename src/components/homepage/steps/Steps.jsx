import React from "react";
import SectionHeading from "../../ui/SectionHeading";
import StepsCard from "./stepsCard/StepsCard";

const Steps = () => {
  const sectionHeading = `Get Started in 3 Steps`;
  const sectionDesc = `Start using premium digital tools in minutes, not hours.`;
  return (
    <div className="bg-base-200 p-4">
      <SectionHeading
        sectionHeading={sectionHeading}
        sectionDesc={sectionDesc}
      />
      <StepsCard />
    </div>
  );
};

export default Steps;
