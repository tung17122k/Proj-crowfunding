import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ StartCampaign ~ user:", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
  }, [user]);
  if (!user || !user.email) return null;

  return <>{children}</>;
};

export default RequiredAuthPage;
