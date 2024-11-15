import React from "react";
import UserAddress from "./UserAddressCard";
import UserAddressCard from "./UserAddressCard";

const Address = () => {
  return (
    <div className="space-y-3">
      {[1, 1, 1, 1].map((item) => (
        <UserAddressCard />
      ))}
    </div>
  );
};

export default Address;
