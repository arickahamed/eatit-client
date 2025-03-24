import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductSlice {
  title: string | null;
  description: string | null;
  category: string | null;
  image: string | null;
  price: number | null;
  quantity: number | null;
  id: string | null;
}

const initialState: IProductSlice[] = [{
  title: null,
  description: null,
  category: null,
  image: null,
  price: null,
  quantity: null,
  id: null
}];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to set products data
    setProductsData: (
      state,
      action: PayloadAction<
        {
          title: string | null;
          description: string | null;
          category: string | null;
          price: number | null;
          image: string | null;
          quantity: number | null;
          id: string;
        }[]
      >
    ) => {
      return action.payload; 
    },
  },
});

export const { setProductsData } = productsSlice.actions;

export default productsSlice.reducer;
