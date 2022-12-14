import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const TwitterIcon = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 12 10"
    >
      <defs>
        <rect id="icon-twitter-a" width="12" height="12" />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
        <mask id="icon-twitter-b" fill="#fff">
          <use href="#icon-twitter-a" />
        </mask>
        <path
          fill="#FFF"
          d="M10.875,2.4955 L11.625,1 L10.5,1.747 L10.281,1.8565 C9.834,1.336 9.1785,1 8.4375,1 C7.09125,1 6,1.90075 6,3.244 C6,3.427 6.024,3.79075 6.06225,3.961 L6,3.9925 C6,3.9925 1.125,3.244 0.75,1.3735 C0.75,1.3735 -0.375,3.244 1.5,4.74025 C1.5,4.74025 0.75,5.1145 0.375,4.74025 C0.375,4.74025 0.375,5.863 2.25,6.985 C2.25,6.985 1.5,7.3585 1.125,6.985 C1.125,6.985 2.625,8.4805 3.375,8.4805 C3.375,8.4805 3.375,9.604 0,9.604 C0,9.604 4.26675,12.40825 8.25,9.22975 C10.275,7.6135 10.76775,5.566 10.79475,4.02175 C10.842,3.832 10.875,3.63625 10.875,3.4315 L10.875,3.244 L12,2.122 L10.875,2.4955 Z"
          mask="url(#icon-twitter-b)"
        />
      </g>
    </Icon>
  );
};

export default TwitterIcon;
