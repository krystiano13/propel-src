import React from "react";
import SVGElement from "../Promoting/SVG/SVGElement";

const P1 = () => {
  return (
    <SVGElement
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="32" cy="32" r="30" stroke="#5AB963" stroke-width="4" />
        <path
          fill="#000"
          d="M26,31 L42,31 L42,35 L26,35 L22,35 L22,23 L26,23 L26,31 Z"
          transform="rotate(-45 32 29)"
        />
      </g>
    </SVGElement>
  );
};

export default P1;
