import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {};
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://image.msscdn.net/thumbnails/images/goods_img/20240816/4336354/4336354_17247392379149_big.jpg?w=1200"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            스몰 소프트 게임 숄더백 - 다크 초콜릿
          </h1>
          <p className="text-gray-600 font-medium text-sm">르메르</p>
          <p className="text-gray-400 text-xs">
            <strong>판매자: </strong>르메르
          </p>
          <p className="text-sm">구매 후 7일 이내에 교환이 가능</p>
          <p className="text-sm text-gray-500">
            <strong>수량 : </strong> 1
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>{1}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5 ">
          <p className="text-gray-700 font-medium">950,990원</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
