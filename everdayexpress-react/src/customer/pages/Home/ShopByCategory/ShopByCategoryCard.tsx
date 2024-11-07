import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custome-border cursor-pointer w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img
          className="rounded-full group hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://cafe24.poxo.com/ec01/kimy766/FswOdE9MfRI0I8YryJi6auBrxG/5fWR0yipxHJsYIZZfnDVUiAlJKmDoe5k94BV46GDAdrFkFI5wkQUGfvTmug==/_/web/product/medium/202406/e61d5f7357a6cb2598a4ec343a1ce974.jpg"
          alt=""
        />
      </div>
      <h1>홈 데코</h1>
    </div>
  );
};

export default ShopByCategoryCard;
