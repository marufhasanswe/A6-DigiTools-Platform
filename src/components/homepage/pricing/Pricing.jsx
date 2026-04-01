import React from "react";
import SectionHeading from "../../ui/SectionHeading";
import PricingCard from "./pricingCard/PricingCard";

const Pricing = () => {
  const sectionHeading = `Simple, Transparent Pricing`;
  const sectionDesc = `Choose the plan that fits your needs. Upgrade or downgrade anytime.`;
  return (
    <div className="container mx-auto p-4">
      <SectionHeading
        sectionHeading={sectionHeading}
        sectionDesc={sectionDesc}
      />
      <PricingCard />
    </div>
  );
};

export default Pricing;
