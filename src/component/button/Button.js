import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  let defaultBtnClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[52px] ";

  switch (rest.kind) {
    case "primary":
      defaultBtnClassName = defaultBtnClassName + "bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClassName = defaultBtnClassName + "bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClassName =
        defaultBtnClassName + "bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }

  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );

  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultBtnClassName} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button
      className={`${defaultBtnClassName} ${className} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propsTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
