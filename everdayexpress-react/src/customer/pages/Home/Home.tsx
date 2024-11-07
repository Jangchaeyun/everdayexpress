import React from "react";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />
        <div className="pt-20">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center">
            오늘의 할인
          </h1>
          <Deal />
        </div>
        <section className="py-20">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center">
            카테고리별 쇼핑
          </h1>
          <ShopByCategory />
        </section>
        <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2024/06/12/07/02/shopping-bag-8824561_1280.jpg"
            alt=""
          />
          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <p className="text-lg md:text-2xl">
              <span className="logo">EveryDay Express</span> 와 함께
            </p>
            <h1>귀하의 제품을 판매해보세요</h1>
            <div className="pt-6 flex justify-center">
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
              >
                판매자가 되기
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
