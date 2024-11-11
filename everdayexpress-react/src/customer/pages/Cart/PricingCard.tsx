import { Divider } from "@mui/material";
import React from "react";

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>소계</span>
          <span>1,090,000원</span>
        </div>
        <div className="flex justify-between items-center">
          <span>할인</span>
          <span>139,010원</span>
        </div>
        <div className="flex justify-between items-center">
          <span>배송비</span>
          <span>Free</span>
        </div>
        <Divider />
      </div>
      <div className="flex justify-between items-center">
        <span>총 가격</span>
        <span>950,990원</span>
      </div>
    </>
  );
};

export default PricingCard;
