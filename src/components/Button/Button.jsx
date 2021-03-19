import React from "react";
import "./Button.css";

const Button = ({ variant = "red", children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
