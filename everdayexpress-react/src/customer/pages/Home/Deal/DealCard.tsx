import React from "react";

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s10-case-unselect-gallery-1-202409_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1724620929305"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">스마트 워치</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">쇼핑하기</p>
      </div>
    </div>
  );
};

export default DealCard;
