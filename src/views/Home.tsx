import React from "react";
import { useLocation } from "react-router-dom";
import headerContentArray from "./headerContentArray";

import Promoting from "../components/Promoting/Promoting";
import Illud from "../components/Illud/Illud";
import Content from "../components/Content/Content";
import KnowPremiums from "../components/Content/KnowPremiums";

interface HomeInterface {
  id: number;
  changeHeaderContent: (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => void;
}

const Home: React.FC<HomeInterface> = ({ changeHeaderContent, id }) => {
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
      <Promoting Home={true} />
      <Illud />
      <Content />
      <KnowPremiums />
    </>
  );
};

export default Home;
