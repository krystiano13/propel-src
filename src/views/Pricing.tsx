import React from "react";
import { useLocation } from "react-router-dom";
import headerContentArray from "./headerContentArray";

import Content from "../components/Content/Content";
import DifferentOption from "../components/DifferentOption/DifferentOption";
import People from "../components/People/People";
import Plans from "../components/Plans/Plans";
import PricingContent from "../components/PricingContent/PricingContent";
import Questions from "../components/Questions/Questions";

interface PricingInterface {
  id: number;
  changeHeaderContent: (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => void;
}

const Pricing: React.FC<PricingInterface> = ({ changeHeaderContent, id }) => {
  const location = useLocation();
  React.useEffect(() => {
    changeHeaderContent(
      headerContentArray[id].subpage,
      headerContentArray[id].title,
      headerContentArray[id].subtitle,
      headerContentArray[id].colorBackground
    );
  }, [location]);
  return (
    <>
      <Plans />
      <PricingContent />
      <Questions />
    </>
  );
};

export default Pricing;
