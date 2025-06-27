// lib/redux/slices/adminOrdersSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    newOrderCount: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setAdminOrders: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },
    setNewOrderCount: (state, action) => {
      state.newOrderCount = action.payload;
    },
    resetNewOrderCount: (state) => {
      state.newOrderCount = 0;
    },
    setAdminOrdersLoading: (state) => {
      state.loading = true;
    },
    setAdminOrdersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setAdminOrders,
  setNewOrderCount,
  resetNewOrderCount,
  setAdminOrdersLoading,
  setAdminOrdersError,
} = adminSlice.actions;

export default adminSlice.reducer;
