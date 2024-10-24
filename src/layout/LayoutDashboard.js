import { Button } from "component/button";
import Overlay from "component/common/Overlay";
import { Input } from "component/input";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite ">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute z-10 flex items-center justify-center right-5 top-2 text-text1 w-11 h-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="mb-2 font-medium text-text2">
          Enter the contribute amount
        </p>
        <input
          placeholder="$10"
          name="amount"
          className="w-full px-5 py-3 mb-5 text-lg font-semibold border rounded-md border-strock"
        ></input>
        <p className="mb-5 text-text3">
          Contribution are not associatied with perks
        </p>
        <Button kind="primary">Continue</Button>
        <div className="mt-[60px]">
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
