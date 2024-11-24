import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import PersonalDetails from "./PersonalDetails";
import PickupAddress from "./PickupAddress";
import BankDetails from "./BankDetails";
import BusinessDetails from "./BusinessDetails";
import { useAppSelector } from "../../../State/Store";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };
  const handleClose = () => setOpen(false);
  const { seller } = useAppSelector((store) => store);

  const [selectedForm, setSelectedForm] = useState("개인정보");

  const renderSeletedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "pickupAddress":
        return <PickupAddress />;
      case "bankDetails":
        return <BankDetails />;
      default:
        return <BusinessDetails />;
    }
  };

  return (
    <div className="lg:px-20 pt-3 pb-20  space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">개인정보</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("personalDetails")}
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
            <ProfileFieldCard
              keys="판매자 이름"
              value={seller.profile?.sellerName}
            />
            <Divider />
            <ProfileFieldCard
              keys="판매자 이메일"
              value={seller.profile?.email}
            />
            <Divider />
            <ProfileFieldCard
              keys="판매자 전화번호"
              value={seller.profile?.mobile}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">회사 세부 정보</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("businessDetails")}
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
              keys="회사이름 / 브렌드이름"
              value={seller.profile?.businessDetails.businessName}
            />
            <Divider />
            <ProfileFieldCard
              keys="사업자등록번호"
              value={seller.profile?.bin || "제공되지 않음"}
            />
            <Divider />
            <ProfileFieldCard
              keys="계정 상태"
              value={seller.profile?.accountStatus}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">픽업 주소</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("pickupAddress")}
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
              value={seller.profile?.pickupAddress.address}
            />
            <Divider />
            <ProfileFieldCard
              keys="우편번호"
              value={seller.profile?.pickupAddress.pinCode}
            />
            <Divider />
            <ProfileFieldCard
              keys="전화번호"
              value={seller.profile?.pickupAddress.mobile}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">은행 세부 정보</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("bankDetails")}
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
              keys="계좌 소유자"
              value={seller.profile?.bankDetails.accountHolderName}
            />
            <Divider />
            <ProfileFieldCard
              keys="계좌번호"
              value={seller.profile?.bankDetails.accountNumber}
            />
            <Divider />
            <ProfileFieldCard
              keys="계좌 비밀번호"
              value={seller.profile?.bankDetails.accountPassword}
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSeletedForm()}</Box>
      </Modal>
    </div>
  );
};

export default Profile;
