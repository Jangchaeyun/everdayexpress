import React from "react";
import { Product } from "../../../types/ProductTypes";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../../../State/Store";
import { addProductToWishlist } from "../../../State/customer/wishlistSlice";
import { teal } from "@mui/material/colors";

const WishlistProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();
  const handleWishlist = () => {
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };
  return (
    <div className="w-60 relative">
      <div className="w-full">
        <img src={item.images[0]} className="object-top w-full" alt="" />
      </div>
      <div className="pt-3 space-y-1">
        <p>{item.title}</p>
        <div className="price flex items-center gap-3">
          <span className="text-gray-800">
            {item.sellingPrice.toLocaleString()}원
          </span>
          <span className="thin-line-through text-gray-400">
            {item.mrpPrice.toLocaleString()}원
          </span>
          <span className="text-primary-color font-semibold">
            {item.discountPercent}%
          </span>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <button onClick={handleWishlist}>
          <Close
            className="cursor-pointer bg-white rounded-full p-1"
            sx={{ color: teal[500], fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default WishlistProductCard;
