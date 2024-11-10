import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067297/image/wbelpvsaotasnf8ca4sk.webp"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">
              스몰 소프트 게임 숄더백 - 다크 초콜릿
            </p>
            <p className="text-lg text-gray-600">가방</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5">
              <span className="text-gray-800">950,990원</span>
              <span className="thin-line-through text-gray-400">
                1,090,000원
              </span>
              <span className="text-primary-color font-semibold">13% 할인</span>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
