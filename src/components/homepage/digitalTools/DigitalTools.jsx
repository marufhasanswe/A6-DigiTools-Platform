import React, { use } from "react";
import SectionHeading from "../../ui/SectionHeading";
import Cards from "./cards/Cards";
import TogglingButtons from "./togglingButtons/TogglingButtons";

const DigitalTools = ({ dataPromises }) => {
  const cards = use(dataPromises);
  return (
    <div className="container mx-auto">
      <TogglingButtons />
      <Cards cards={cards} />
    </div>
  );
};

export default DigitalTools;
