import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const InstagramIcon = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <g fill="#FFF" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M2,1 C1.44771525,1 1,1.44771525 1,2 L1,10 C1,10.5522847 1.44771525,11 2,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,2 C11,1.44771525 10.5522847,1 10,1 L2,1 Z M2,0 L10,0 C11.1045695,0 12,0.8954305 12,2 L12,10 C12,11.1045695 11.1045695,12 10,12 L2,12 C0.8954305,12 0,11.1045695 0,10 L0,2 C0,0.8954305 0.8954305,0 2,0 Z"
        />
        <path
          fillRule="nonzero"
          d="M6,7 C6.55228475,7 7,6.55228475 7,6 C7,5.44771525 6.55228475,5 6,5 C5.44771525,5 5,5.44771525 5,6 C5,6.55228475 5.44771525,7 6,7 Z M6,8 C4.8954305,8 4,7.1045695 4,6 C4,4.8954305 4.8954305,4 6,4 C7.1045695,4 8,4.8954305 8,6 C8,7.1045695 7.1045695,8 6,8 Z"
        />
        <circle cx="9" cy="3" r="1" />
      </g>
    </Icon>
  );
};

export default InstagramIcon;