"use client";
import CartItemCard from "@/components/cart/CartItemCard/page";
import { TotalPriceSelector } from "@/redux/Slices/cartSlice";
import { useAppSelector } from "@/redux/Store/Store";

import Card from '@/components/templates/premium-templates/card/page'
const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
        <Card />

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">
          {totalPrice} $
        </span>
      </p>
    </div>
  );
};

export default CartPage;