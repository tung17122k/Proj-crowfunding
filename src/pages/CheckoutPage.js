import ContributionSummury from "modules/payment/ContributionSummury";
import Payment from "modules/payment/Payment";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-[891px] flex items-start ">
      <div>
        <h2 className="mb-10 text-3xl font-bold text-text1">Payment</h2>
        <Payment></Payment>
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  );
};

export default CheckoutPage;
