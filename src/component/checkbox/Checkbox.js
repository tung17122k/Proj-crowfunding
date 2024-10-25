import React from "react";

const Checkbox = ({
  checked = false,
  onChange = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start select-none gap-x-5">
      <label
        className={`inline-flex items-center justify-center p-1 w-5 h-5 text-white border-2 rounded cursor-pointer  ${
          checked
            ? "bg-primary border-primary"
            : "border-strock dark:border-text3"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={onChange}
          name={name}
          id={name}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </label>
      {children && (
        <label htmlFor={name} className="font-medium cursor-pointer">
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
