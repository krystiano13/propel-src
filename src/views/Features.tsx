import React from "react";
import { useLocation } from "react-router-dom";
import headerContentArray from "./headerContentArray";

import Promoting from "../components/Promoting/Promoting";
import Content from "../components/Content/Content";
import GoPremium from '../components/Premium/GoPremium';


interface FeaturesInterface {
  id: number;
  changeHeaderContent: (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => void;
}

const Features: React.FC<FeaturesInterface> = ({ changeHeaderContent, id }) => {
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
      <Promoting Home={false} />
      <Content />
      <GoPremium />
    </>
  );
};

export default Features;
