import React from 'react';
import styled from 'styled-components';
import Icon from "./Icon";

const FacebookIcon = () => {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
      >
        <defs>
          <rect id="icon-facebook-a" width="12" height="12" />
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(-3)">
          <mask id="icon-facebook-b" fill="#fff">
            <use href="#icon-facebook-a" />
          </mask>
          <path
            fill="#FFF"
            d="M6.99973326,4.79648013 L6.99973326,3.99653348 C6.99973326,3.36377567 7.09732675,2.0062662 7.98766738,2.0062662 L9.37717471,2.0062662 L9.37717471,0.112792478 C9.18038784,0.0855942918 8.76761536,0 7.98366764,0 C6.34617685,0 5.39983996,0.526364897 5.39983996,2.39664017 L5.39983996,4.79648013 L3,4.79648013 L3,6.39637343 L5.39983996,6.39637343 L5.39983996,11.996 L6.99973326,11.996 L6.99973326,6.39637343 L8.99959989,6.39637343 L9.40037317,4.79648013 L6.99973326,4.79648013 Z"
            mask="url(#icon-facebook-b)"
          />
        </g>
      </Icon>
    );
}

export default FacebookIcon;

