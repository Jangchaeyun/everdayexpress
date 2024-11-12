import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>장채윤</h1>
        <p className="w-[320px]">부천시 원미구 조마루로 105번길 8-8 3층</p>
        <p>
          <strong>전화번호 :</strong> 01066031148
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
