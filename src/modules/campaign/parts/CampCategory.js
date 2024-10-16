import IconFolder from "component/icons/IconFolder";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "Ecucation", className = "text-xs " }) => {
  return (
    <Link
      to="/"
      className={`mb-4 flex items-center font-medium gap-x-3 text-text3 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
