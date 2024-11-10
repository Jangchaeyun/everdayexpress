import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://image.msscdn.net/thumbnails/images/goods_img/20240417/4061021/4061021_17163534413735_big.jpg?w=1200"
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>르메르</h1>
            <p>스몰 소프트 게임 숄더백 - 다크 초콜릿</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="text-gray-800">950,990원</span>
            <span className="thin-line-through text-gray-400">1,090,000원</span>
            <span className="text-primary-color font-semibold">13% 할인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
