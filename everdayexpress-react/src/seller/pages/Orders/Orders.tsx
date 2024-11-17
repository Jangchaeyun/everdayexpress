import React from "react";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl">모든 주문</h1>
      <OrderTable />
    </div>
  );
};

export default Orders;
