import React from "react";
import { useLocation } from "react-router-dom";
import headerContentArray from "./headerContentArray";

import Combine from "../components/Combine/Combine";
import Malorum from "../components/Malorum/Malorum";
import Meet from "../components/Meet/Meet";

interface AboutInterface {
  id: number;
  changeHeaderContent: (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => void;
}

const About: React.FC<AboutInterface> = ({ changeHeaderContent, id }) => {
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
      <Combine />
      <Malorum />
      <Meet />
    </>
  );
};

export default About;
