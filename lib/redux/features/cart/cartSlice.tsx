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
}

const initialState: ICartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action: PayloadAction<ICartSlice[]>) => {
      state.cartItems = action.payload;
    },
    setCartClear: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setCartData, setCartClear } = cartSlice.actions;

export default cartSlice.reducer;
