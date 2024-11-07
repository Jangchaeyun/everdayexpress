import React from "react";
import DealCard from "./DealCard";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="py-5 lg:px-20">
      <div className="flex item-center justify-between">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <DealCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Deal;
