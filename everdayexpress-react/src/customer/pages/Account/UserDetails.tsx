import React from "react";
import ProfileFieldCard from "../../../componenet/ProfileFieldCard";
import { Divider } from "@mui/material";

const UserDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-semibold text-gray-600">개인 정보</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="이름" value="EveryDay" />
          <Divider />
          <ProfileFieldCard keys="이메일" value="everday@naver.com" />
          <Divider />
          <ProfileFieldCard keys="전화번호" value="01066031148" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
