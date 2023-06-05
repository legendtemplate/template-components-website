import { CartItem } from "@/types/index";
import Image from "next/image";
import React from "react";
import {
  decrement,
  increment,
} from "@/redux/Slices/cartSlice";
import { useAppDispatch } from "@/redux/Store/Store"
import QtyBtn from "@/components/cart/QtyBtn/page";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-4 items-center py-2 border-b">
      <Image
        src={cartItem.product.imagePath}
        width={200}
        height={150}
        alt={cartItem.product.name}
        className="rounded-md"
      />
      <p className="text-slate-600 text-center">
        {cartItem.product.name}
      </p>
      <div className="flex flex-col items-center justify-center gap-3">
        <p>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() =>
            dispatch(decrement(cartItem.product))
          }
          onIncrease={() =>
            dispatch(increment(cartItem.product))
          }
        />
      </div>
      <p className="text-center">
        {cartItem.qty * cartItem.product.price} $
      </p>
    </div>
  );
};

export default CartItemCard;