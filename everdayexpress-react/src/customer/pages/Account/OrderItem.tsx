import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">발송 준비</h1>
          <p>11월 13일, 수요일 도착</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://image.msscdn.net/thumbnails/images/goods_img/20240816/4336354/4336354_17247392379149_big.jpg?w=1200"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">스몰 소프트 게임 숄더백 - 다크 초콜릿</h1>
          <p>르메르</p>
          <p>
            <strong>사이즈: </strong>
            Free 사이즈
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
