import React from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../../State/Store";

const UserDetails = () => {
  const { auth } = useAppSelector((store) => store);
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-semibold text-gray-600">개인 정보</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="이름" value={auth.user?.fullName || ""} />
          <Divider />
          <ProfileFieldCard keys="이메일" value={auth.user?.email || ""} />
          <Divider />
          <ProfileFieldCard keys="전화번호" value={auth.user?.mobile || ""} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
