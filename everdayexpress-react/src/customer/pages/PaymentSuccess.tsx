import { Button } from "@mui/material";
import React, { useEffect } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAppDispatch } from "../../State/Store";
import { paymentSuccess } from "../../State/customer/orderSlice";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { orderId } = useParams();
  const location = useLocation();
  const getQueryParam = (key: string) => {
    const query = new URLSearchParams(location.search);
    return query.get(key);
  };

  useEffect(() => {
    const paymentId = getQueryParam("stripe_payment_id");
    const paymentLinkId = getQueryParam("stripe_payment_link_id");
    dispatch(
      paymentSuccess({
        jwt: localStorage.getItem("jwt") || "",
        paymentId: paymentId || "",
        paymentLinkId: paymentLinkId || "",
      })
    );
  }, [orderId]);
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center">
        <h1 className="text-3xl font-semibold">축하드립니다!</h1>
        <h1 className="text-2xl font-semibold">주문이 완료되었습니다.</h1>
        <div>
          <Button
            color="secondary"
            onClick={() => navigate("/")}
            variant="contained"
          >
            더 쇼핑하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
