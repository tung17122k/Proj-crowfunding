import React from "react";

const IconProfile = () => {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={48} height={48} rx={10} fill="white" />
      <circle
        cx={24}
        cy={21}
        r={3}
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={24} cy={24} r={11} stroke="#A2A2A8" strokeWidth={2} />
      <path
        d="M31 32C30.5871 30.8525 29.6773 29.8384 28.4117 29.1152C27.146 28.392 25.5953 28 24 28C22.4047 28 20.854 28.392 19.5883 29.1152C18.3227 29.8384 17.4129 30.8525 17 32"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconProfile;
