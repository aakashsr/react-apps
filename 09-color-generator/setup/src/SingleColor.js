import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  let bgColor = rgb.join(",");

  return (
    <article
      style={{ backgroundColor: `rgb(${bgColor})` }}
      className={`color ${index > 10 && "color-light"}`}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
