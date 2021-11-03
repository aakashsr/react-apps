import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  let bgColor = rgb.join(",");
  const hexValue = `#${hex}`;

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const copy = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(copy);
  }, [alert]);
  return (
    <article
      style={{ backgroundColor: `rgb(${bgColor})` }}
      className={`color ${index > 10 && "color-light"}`}
      onClick={() => copyToClipboard()}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p>Copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
