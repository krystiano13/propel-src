import React from "react";
import styled from "styled-components";

interface elementInterface {
  left: boolean;
  imgSrc: string;
  bolderText: string;
  text: string;
  title: string;
  xTranslation: string;
}

type Props = {
  xTranslation: string;
};

const ContentElement: React.FC<elementInterface> = ({
  left,
  imgSrc,
  text,
  bolderText,
  title,
  xTranslation,
}) => {
  const [portrait, setPortrait] = React.useState(false);
  const detectPortrait = () => {
    setInterval(() => {
      if (window.innerWidth >= window.innerHeight) {
        setPortrait(false);
      } else {
        setPortrait(true);
      }
    }, 50);
  };
  React.useEffect(() => {
    detectPortrait();
  }, []);
  return (
    <ElementWrapper xTranslation={xTranslation}>
      {left === true ? (
        <>
          <ElementImage src={imgSrc} />
          <Content>
            <ContentTitle>
              <ContentBolderText>{bolderText}</ContentBolderText>
              {title}
            </ContentTitle>
            <ContentText>{text}</ContentText>
          </Content>
        </>
      ) : (
        <>
          {portrait === false ? (
            <>
              <Content>
                <ContentTitle>
                  <ContentBolderText>{bolderText}</ContentBolderText>
                  {title}
                </ContentTitle>
                <ContentText>{text}</ContentText>
              </Content>
              <ElementImage src={imgSrc} />
            </>
          ) : (
            <>
              <ElementImage src={imgSrc} />
              <Content>
                <ContentTitle>
                  <ContentBolderText>{bolderText}</ContentBolderText>
                  {title}
                </ContentTitle>
                <ContentText>{text}</ContentText>
              </Content>
            </>
          )}
        </>
      )}
    </ElementWrapper>
  );
};

export default ContentElement;

const ElementWrapper = styled.div<Props>`
  width: 60vw;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
  transform: translateX(${({ xTranslation }) => xTranslation});

  @media screen and (orientation: portrait) {
    transform: translateX(0vw);
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 90vw;
    height: 60vh;
  }
`;

const ElementImage = styled.img`
  width: 26vw;
  height: 36vh;
  display: block;

  @media screen and (orientation: portrait) {
    width: 90vw;
    height: 28vh;
  }
`;

const Content = styled.div`
  width: 26vw;
  height: 40vh;
  transform: translateY(4vh);

  @media screen and (orientation: portrait) {
    width: 90vw;
    height: 28vh;
  }
`;

const ContentText = styled.p`
  font-weight: 300;
  color: gray;
  opacity: 0.85;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0;
  font-size: 2.25vh;

  max-width: 100%;
  padding-top: 2.5vh;

  @media screen and (orientation: portrait) {
    font-size: 2vh;
  }
`;

const ContentTitle = styled.h1`
  margin: 0;
  font-size: 3vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: gray;
  opacity: 0.65;

  @media screen and (orientation: portrait) {
    font-size: 2.5vh;
  }
`;

const ContentBolderText = styled.span`
  font-weight: 800;
  color: black;
`;
