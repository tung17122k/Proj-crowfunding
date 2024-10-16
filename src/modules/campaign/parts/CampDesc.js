import React from "react";

const CampDesc = ({ children, className = "mb-4" }) => {
  return (
    <p className={`font-normal text-text3 text-xs ${className}`}>
      {/* Fun, durable and reusable boxes with eco-friendly options. */}
      {children}
    </p>
  );
};

export default CampDesc;
