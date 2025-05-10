import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartSlice {
  title: string | null;
  image: string | null;
  price: number | null;
  quantity: number | null;
  id: string | null;
}

interface ICartState {
  cartItems: ICartSlice[];
  orderPlaced: boolean;
}

const initialState: ICartState = {
  cartItems: [],
  orderPlaced:false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action: PayloadAction<ICartSlice[]>) => {
      state.cartItems = action.payload;
    },
    setOrderPlaced: (state, action: PayloadAction<boolean>) => {
    state.orderPlaced = action.payload;
  },
    setCartClear: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setCartData, setOrderPlaced, setCartClear } = cartSlice.actions;

export default cartSlice.reducer;
