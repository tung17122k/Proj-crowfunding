import Heading from "component/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import React from "react";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "component/common/Gap";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number="4">Your campaigns</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
    </LayoutDashboard>
  );
};

export default DashboardPage;
