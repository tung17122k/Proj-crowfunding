import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "component/common/ErrorComponent";

const Input = ({
  control,
  name,
  placeholder,
  type = "text",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <div className="relative">
      <input
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border  rounded-xl text-text1 bg-transparent dark:border-darkStroke dark:placeholder:text-text2 dark:text-white ${
          error.length > 0
            ? "border-error placeholder:text-error text-error"
            : "border-strock  placeholder:text-text4"
        } ${children ? "pr-16" : ""}`}
        placeholder={placeholder}
        id={name}
        {...field}
        {...rest}
      />
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
