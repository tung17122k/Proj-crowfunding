import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

const RequiredAuthPage = ({ allowPermission }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermissions = user?.permissions || [];

  const location = useLocation();

  // console.log("🚀 ~ StartCampaign ~ user:", user);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/login");
  //   }
  // }, [user]);
  // if (!user || !user.email) return null;

  return userPermissions.find((p) => allowPermission?.includes(p)) ? (
    <Outlet></Outlet>
  ) : user ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuthPage;
