import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthSlice {
  email: string | null;
  role: string | null;
}

const initialState: IAuthSlice = {
  email: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set email and role
    setAuthData: (
      state,
      action: PayloadAction<{ email: string | null; role: string | null }>
    ) => {
      state.email = action?.payload?.email;
      state.role = action?.payload?.role;
    },

    // Action to clear email and role
    clearAuthData: (state) => {
      state.email = null;
      state.role = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
