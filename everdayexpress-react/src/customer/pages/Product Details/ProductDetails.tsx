import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Star,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import SimilarProduct from "../Page Details/SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantiy, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grio-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067297/image/wbelpvsaotasnf8ca4sk.webp"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://res.cloudinary.com/dmxnml9p1/image/upload/v1731067297/image/wbelpvsaotasnf8ca4sk.webp"
              alt=""
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">르메르</h1>
          <p className="text-gray-500 font-semibold">
            스몰 소프트 게임 숄더백 - 다크 초콜릿
          </p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 pt-5">
            <div className="flex gap-1 items-center">
              <span>4.5</span>
              <Star sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>109개의 평가</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5">
              <span className="text-gray-800">950,990원</span>
              <span className="thin-line-through text-gray-400">
                1,090,000원
              </span>
              <span className="text-primary-color font-semibold">13% 할인</span>
            </div>
            <p className="text-sm">무료 배송</p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>정품 & 품질 보증</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% 환불 보장</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>무료 배송 및 반품</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>착불 결제가 가능</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>수량</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantiy == 1}
                onClick={() => setQuantity(quantiy - 1)}
              >
                <Remove />
              </Button>
              <span>{quantiy}</span>
              <Button onClick={() => setQuantity(quantiy + 1)}>
                <Add />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              장바구니 담기
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              위시리스트
            </Button>
          </div>
          <div className="mt-5">
            <p>
              유명 패션 하우스 에르메스와 라코스테의 수석 디자이너로 활약했던
              크리스토퍼 르메르가 1991년 본인의 이름을 내세워 론칭한 르메르.
              차분한 디자인과 부드러운 실루엣, 뉴트럴 컬러로 프렌치 시크의
              절제된 우아함을 선보이는 것이 특징입니다. 한 치의 오차 없는 정교한
              테일러링을 기반으로 한 르메르의 아이템들을 부티크에서 소개합니다.
              자수 및 패치, 각종 라벨, 가죽 제품 로고 양각 및 음각 방식, 개체별
              제조국 등의 상품 디테일 및 브랜드 택, 브랜드 포장 봉투, 브랜드
              더스트 백, 하드케이스, 쇼핑백 등 브랜드 구성품의 경우 생산 시기 및
              입출고 시점에 따라 촬영된 상품 사진 및 상세페이지상의 정보와
              고객님께서 받아보는 실제 상품의 디테일이 상이할 수 있습니다.
            </p>
          </div>
          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="texy-lg font-bold">비슷한 상품</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
