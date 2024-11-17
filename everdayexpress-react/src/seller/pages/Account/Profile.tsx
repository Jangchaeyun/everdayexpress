import { Edit } from "@mui/icons-material";
import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import ProfileFieldCard from "../../../componenet/ProfileFieldCard";

const Profile = () => {
  return (
    <div className="lg:px-20 pt-3 pb-20  space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">개인정보</h1>
          <div>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://img.freepik.com/free-photo/anime-rainbow-landscape_23-2151712762.jpg"
          />
          <div>
            <ProfileFieldCard keys="판매자 이름" value={"EveryDay"} />
            <Divider />
            <ProfileFieldCard
              keys="판매자 이메일"
              value={"everyday@gmail.com"}
            />
            <Divider />
            <ProfileFieldCard keys="판매자 전화번호" value={"010-6603-1148"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">회사 세부 정보</h1>
          <div>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard keys="회사이름 / 브렌드이름" value={"르메르"} />
            <Divider />
            <ProfileFieldCard keys="사업자등록번호" value={"0123456789"} />
            <Divider />
            <ProfileFieldCard keys="계정 상태" value={"심사 진행중"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">픽업 주소</h1>
          <div>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard
              keys="주소"
              value={"경기도 부천시 원미구 조마루로 105번길 8-8"}
            />
            <Divider />
            <ProfileFieldCard keys="우편번호" value={"14589"} />
            <Divider />
            <ProfileFieldCard keys="전화번호" value={"032-123-1234"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">은행 세부 정보</h1>
          <div>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard keys="계좌 소유자" value={"장채윤"} />
            <Divider />
            <ProfileFieldCard keys="계좌번호" value={"12345678901223"} />
            <Divider />
            <ProfileFieldCard keys="계좌 비밀번호" value={"123456"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
