import { Button } from "@mui/material";
import React, { useState } from "react";
import DealTable from "./DealTable";
import DealCategoryTable from "./DealCategoryTable";
import CreateDealForm from "./CreateDealForm";

const tabs = ["거래", "카테고리", "거래 생성"];
const Deal = () => {
  const [activeTab, setActiveTab] = useState("Deals");
  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item) => (
          <Button
            onClick={() => setActiveTab(item)}
            variant={activeTab == item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-5">
        {activeTab == "거래" ? (
          <DealTable />
        ) : activeTab == "카테고리" ? (
          <DealCategoryTable />
        ) : (
          <div className="mt-5 flex flex-col justify-center items-center h-[70vh]">
            <CreateDealForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deal;
