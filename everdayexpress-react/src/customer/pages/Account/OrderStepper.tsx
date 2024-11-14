import { CheckCircle, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const steps = [
  { name: "주문 완료", description: "11월 11일, 월요일", value: "PLACED" },
  {
    name: "발송 준비",
    description: "상품이 포장",
    value: "CONFRIM",
  },
  {
    name: "배송 시작",
    description: "11월 11일, 화요일 ~ 11월 12일, 수요일 배송 시작",
    value: "SHIPPED",
  },
  {
    name: "배송중",
    description: "11월 12일, 화요일 ~ 11월 13일 수요일 사이에 배송",
    value: "ARRIVING",
  },
  {
    name: "배송완료",
    description: "11월 13일, 수요일 배송 완료 예정",
    value: "DELIVERED",
  },
];

const cancleStep = [
  { name: "주문 완료", description: "11월 11일, 화요일", value: "PLACED" },
  { name: "주문 취소", description: "11월 11일, 화요일", value: "CANCLED" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCLED") {
      setStatusStep(cancleStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <>
          <div key={index} className={`flex px-4`}>
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  index <= currentStep
                    ? "bg-gray-200 text-teal-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.value === orderStatus ? (
                  <CheckCircle />
                ) : (
                  <FiberManualRecord sx={{ zIndex: -1 }} />
                )}
              </Box>
              {statusStep.length - 1 != index && (
                <div
                  className={`border h-20 w-[2px] ${
                    index < currentStep
                      ? "bg-teal-500"
                      : "bg-gray-300 text-gray-600"
                  }`}
                ></div>
              )}
            </div>
            <div className={`ml-2 w-full`}>
              <div
                className={`${
                  step.value === orderStatus
                    ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                    : ""
                } ${
                  orderStatus === "CANCLED" && step.value === orderStatus
                    ? "bg-red-500"
                    : ""
                } w-full`}
              >
                <p className={``}>{step.name}</p>
                <p
                  className={`${
                    step.value === orderStatus
                      ? "text-gray-200"
                      : "text-gray-500"
                  } text-sm`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Box>
  );
};

export default OrderStepper;
