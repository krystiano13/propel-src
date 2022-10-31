import React from "react";
import { useLocation } from "react-router-dom";
import headerContentArray from "./headerContentArray";

import Content from "../components/Content/Content";
import DifferentOption from "../components/DifferentOption/DifferentOption";
import People from "../components/People/People";

interface PremiumInterface {
  id: number;
  changeHeaderContent: (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => void;
}

const Premium: React.FC<PremiumInterface> = ({ changeHeaderContent, id }) => {
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
      <DifferentOption />
      <People />
      <Content />
    </>
  );
};

export default Premium;
