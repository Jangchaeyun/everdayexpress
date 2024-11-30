import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../State/Store";
import { updateCartItem } from "../../../State/customer/cartSlice";
import { CartItem } from "../../../types/cartTypes";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const handleUpdateQuantity = (value: number) => () => {
    dispatch(
      updateCartItem({
        jwt: localStorage.getItem("jwt"),
        cartItemId: item.id,
        cartItem: { quantity: item.quantity + value },
      })
    );
  };
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">{item.product.title}</h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.seller?.businessDetails.businessName}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>판매자: </strong>
            {item.product.seller?.sellerName}
          </p>
          <p className="text-sm">구매 후 7일 이내에 교환이 가능</p>
          <p className="text-sm text-gray-500">
            <strong>수량 : </strong> {item.quantity}
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity(-1)} disabled={true}>
              <Remove />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5 ">
          <p className="text-gray-700 font-medium">
            {item.sellingPrice.toLocaleString()}원
          </p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;
