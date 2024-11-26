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
import React, { useEffect, useState } from "react";
import ReviewCard from "../Review/ReviewCard";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import SimilarProduct from "./SimilarProduct";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../State/customer/ProductSlice";

const ProductDetails = () => {
  const [quantiy, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector((store) => store);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)));
  }, [productId]);

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grio-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images.map((item, index) => (
              <img
                onClick={handleActiveImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src={product.product?.images[activeImage]}
              alt=""
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">
            {product.product?.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 font-semibold">
            {product.product?.title}
          </p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4.5</span>
              <Star sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>109개의 평가</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5">
              <span className="text-gray-800">
                {product.product?.sellingPrice.toLocaleString()}원
              </span>
              <span className="thin-line-through text-gray-400">
                {product.product?.mrpPrice.toLocaleString()}원
              </span>
              <span className="text-primary-color font-semibold">
                {product.product?.discountPercent}% 할인
              </span>
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
            <p>{product.product?.description}</p>
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
