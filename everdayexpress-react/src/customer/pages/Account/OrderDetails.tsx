import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

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
      <div className="border p-5">
        <h1 className="font-bold pb-3">배달 주소</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{"EveryDay"}</p>
            <Divider flexItem orientation="vertical" />
            <p>01066031148</p>
          </div>
          <p>경기도 부천시 원미구 조마루로 105번길 8-8 3층(14589)</p>
        </div>
      </div>
      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">총 가격</p>
            <p>
              이번에
              <span className="text-green-500 font-medium text-xs">
                139,010원
              </span>
              을 절약하셨습니다
            </p>
          </div>
          <p className="font-medium">950,990원</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>착불 결제</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>판매처 : </strong>르메르
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={false}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {false ? "주문 취소됨" : "주문 취소"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
