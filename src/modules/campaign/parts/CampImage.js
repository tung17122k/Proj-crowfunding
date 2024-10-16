import { defaultImage2 } from "constants/global";
import React from "react";

const CampImage = ({ image = defaultImage2, className = "" }) => {
  return (
    <div className={`h-[158px] ${className}`}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
