import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartItemSlide from "./shoping-cart/cartItemSlide";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemSlide,
  },
});
