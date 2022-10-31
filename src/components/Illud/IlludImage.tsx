import React from "react";
import styled, { css } from "styled-components";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";

import "./Illud.css";

type Props = {
  src: string;
  trigger: number;
  choosed: boolean;
};

type ButtonProps = {
  choosed: boolean;
};

const IlludImage = () => {
  const [imageStatus, setImageStatus] = React.useState([true, false]);
  const [trigger, setTrigger] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    setInterval(() => {
      setTrigger(Math.random());
    }, 4000);
  }, []);
  const changeImage = async () => {
    let is = imageStatus;
    for (let i = 0; i < is.length; i++) {
      is[i] = !is[i];
    }
    await setImageStatus(is);
  };
  return (
    <IImageWrapper choosed={imageStatus[0]} trigger={trigger} src={img1}>
      <IImage choosed={imageStatus[0]} src={img1} />
      <IImage choosed={imageStatus[1]} src={img2} />
      <ChangeImageButton
        onClick={() => setImageStatus([true, false])}
        choosed={imageStatus[0]}
      />
      <ChangeImageButton
        onClick={() => setImageStatus([false, true])}
        choosed={imageStatus[1]}
      />
    </IImageWrapper>
  );
};

const IImage = styled.img<ButtonProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  transition: 500ms;

  ${({ choosed }) =>
    choosed === true &&
    css`
      opacity: 1;
    `}

  ${({ choosed }) =>
    choosed === false &&
    css`
      opacity: 0;
    `}
`;

const ChangeImageButton = styled.button<ButtonProps>`
  width: 2vh;
  height: 2vh;
  background-color: grey;
  border: none;
  border-radius: 50%;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-bottom: 2vh;
  cursor: pointer;

  transition: 400ms;

  ${({ choosed }) =>
    choosed === true &&
    css`
      background-color: whitesmoke;
    `}

  ${({ choosed }) =>
    choosed === false &&
    css`
      background-color: grey;
    `}
`;

const IImageWrapper = styled.div<Props>`
  display: block;
  width: 70vw;
  height: 75vh;
  margin-left: 15vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  animation: appear 500ms;

  transition: 250ms;

  @media screen and (orientation: portrait) {
    width: 90vw;
    height: 28vh;
    margin-left: 5vw;
  }
`;

export default IlludImage;
