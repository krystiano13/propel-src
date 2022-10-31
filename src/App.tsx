import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import PartyOn from "./components/PartyOn/PartyOn";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Features from "./views/Features";
import Premium from "./views/Premium";
import Pricing from "./views/Pricing";
import About from "./views/About";

type AppProps = {
  seed: number;
};

const AppWrapper = styled.div<AppProps>`
  width: auto;
  height: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [headerContent, setHeaderContent] = React.useState({
    subpage: "Test",
    title: "Propel your business.",
    subtitle:
      "Propel comes with everything you need to get your business rolling.",
    colorBackground: false,
  });
  const [seed, setSeed] = React.useState(0);

  const changeHeaderContent = (
    subpage: string,
    title: string,
    subtitle: string,
    colorBackground: boolean
  ) => {
    let hc = headerContent;
    hc.subpage = subpage;
    hc.title = title;
    hc.subtitle = subtitle;
    hc.colorBackground = colorBackground;

    setHeaderContent(hc);
    setSeed(Math.random());
    console.log(headerContent);
  };

  return (
    <BrowserRouter>
      <AppWrapper seed={seed}>
        <Header
          title={headerContent.title}
          subtitle={headerContent.subtitle}
          subpageTitle={headerContent.subpage}
          colorBackground={headerContent.colorBackground}
        />
        <Routes>
          <Route
            path="/propel/"
            element={<Home id={0} changeHeaderContent={changeHeaderContent} />}
          />
          <Route
            path="/propel/features"
            element={
              <Features id={1} changeHeaderContent={changeHeaderContent} />
            }
          />
          <Route
            path="/propel/premium"
            element={
              <Premium id={2} changeHeaderContent={changeHeaderContent} />
            }
          />
          <Route
            path="/propel/pricing"
            element={
              <Pricing id={3} changeHeaderContent={changeHeaderContent} />
            }
          />
          <Route
            path="/propel/about"
            element={<About id={4} changeHeaderContent={changeHeaderContent} />}
          />
        </Routes>
        <PartyOn
          bolderText="Quas suscipit ad mea."
          text=" Pri cu dico labores officiis odio principes complectitur ad sea."
        />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
