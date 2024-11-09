import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../component/common/ErrorComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ StartCampaign ~ user:", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
  }, [user]);
  if (user && user.email) return null;

  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkBg isolate">
      <img
        src="/ellipse65.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1] hidden lg:block"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-lg px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
