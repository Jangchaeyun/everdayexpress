import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserOrderHistory } from "../../../State/customer/orderSlice";
import OrderItemCard from "./OrderItemCard";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((store) => store);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  }, []);
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">모든 주문</h1>
        <p>최신순</p>
      </div>
      <div className="space-y-2">
        {order.orders.map((order) =>
          order.orderItems.map((item) => (
            <OrderItemCard item={item} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
