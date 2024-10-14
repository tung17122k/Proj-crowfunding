import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "component/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img src="/icon-google.png" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, { fallback: ErrorComponent });
