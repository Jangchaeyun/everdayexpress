import React, { useEffect, useState } from "react";
import "./Product.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067297/image/wbelpvsaotasnf8ca4sk.webp",
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067183/image/tkhh8vum9a9eujhusomg.webp",
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067608/image/byfzmggjvt4pfll3tiq3.webp",
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067739/image/dxlnk48m5sysadf8zfto.webp",
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067845/image/csmvy5ghqcbpoxei2nrl.webp",
  "https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067933/image/e54wysgm0xpuznehnw5j.webp",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative">
        <div className="card" onMouseEnter={() => setIsHovered(true)}>
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}
          {
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>르메르</h1>
            <p>스몰 소프트 게임 숄더백 - 다크 초콜릿</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">950,990원</span>
            <span className="thin-line-through text-gray-400">1,090,000원</span>
            <span className="text-primary-color font-semibold">13%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
