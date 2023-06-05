"use client";
import { Product } from "@/types/index";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/redux/Slices/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/redux/Store/Store";
import QtyBtn from "@/components/cart/QtyBtn/page";
import { Button } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  // const qty = useAppSelector((state) =>
  //   productQtyInCartSelector(state, props.product.id)
  // );
  // const dispatch = useAppDispatch();
  // if (!qty)
  //   return (
  //     <div className="flex justify-center">
  //       <Button
  //       >
  //         Add To Cart
  //       </Button>
  //     </div>
  //   );
  return (
    // <QtyBtn
    //   onDecrease={() => dispatch(decrement(props.product))}
    //   onIncrease={() => dispatch(increment(props.product))}
    //   qty={qty}
    // />
    <><Button>hello world</Button></>
  );
};

export default AddToCartBtn;

