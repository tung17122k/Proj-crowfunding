import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const StartCampaign = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ StartCampaign ~ user:", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaign;
