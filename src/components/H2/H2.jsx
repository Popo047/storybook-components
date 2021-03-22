import React from "react";
import "./H2.css";

const H2 = ({ variant = "red", children, ...rest }) => {
  return (
    <h2 className="h2" {...rest}>
      {children}
    </h2>
  );
};
export default H2;
