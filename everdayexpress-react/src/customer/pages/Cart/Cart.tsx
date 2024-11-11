import React, { useState } from "react";
import CartItem from "./CartItem";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import PricingCard from "./PricingCard";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="col-span-1 text-sm space-y-3">
          <div className="border rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              </div>
              <span>쿠폰 적용</span>
            </div>
            {true ? (
              <div className="flex justify-between items-center">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="쿠폰 코드"
                  size="small"
                  variant="outlined"
                />
                <Button size="small">적용</Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className="">EveryDay 적용됨</span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
