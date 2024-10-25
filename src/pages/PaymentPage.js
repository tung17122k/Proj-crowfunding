import { Button } from "component/button";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="pt-[66px]">
      <div className=" w-full max-w-[624px] mx-auto text-center">
        <h1 className="text-text1 font-bold text-[25px] mb-3">
          Connect Your Payment Processor
        </h1>
        <p className="text-base text-text3 mb-[60px]">
          To Start Processing credit card payments and donations, you will need
          to select either Paypal or Payoneer{" "}
        </p>
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] space-x-10">
          <div className="flex flex-col items-center justify-center bg-white shadow-1 pt-[35px] px-6 pb-6 rounded-2xl w-full">
            <img srcSet="paypal.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-text3">Get paid directly via Paypal</p>
            <Button kind="ghost" className="w-full">
              Connect
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-1 pt-[35px] px-6 pb-6 rounded-2xl w-full">
            <img srcSet="payoneer.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-text3">Get paid worldwide your Work.</p>
            <Button kind="ghost" className="w-full">
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
