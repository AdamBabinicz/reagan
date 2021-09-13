import React from "react";
import img from "../images/5.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        2021 - {new Date().getFullYear()}. <img src={img} alt="..." />
      </p>
    </div>
  );
};

export default Footer;
