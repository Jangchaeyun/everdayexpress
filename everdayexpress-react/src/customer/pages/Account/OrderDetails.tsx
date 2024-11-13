import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://image.msscdn.net/thumbnails/images/goods_img/20240816/4336354/4336354_17247392379149_big.jpg?w=1200"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">스몰 소프트 게임 숄더백 - 다크 초콜릿</h1>
          <p>르메르</p>
          <p>
            <strong>사이즈: </strong>
            Free 사이즈
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`reviews/${1}/create`)}>
            리뷰 작성
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
    </Box>
  );
};

export default OrderDetails;
