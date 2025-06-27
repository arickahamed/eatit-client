import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import authReducer from "./features/auth/authSlice";
import { combineReducers } from "redux";
import { productsSlice } from "./features/products/productsSlice";
import { cartSlice } from "./features/cart/cartSlice";
import adminOrdersReducer from './features/admin/adminSlice'; 


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  allProducts: productsSlice.reducer,
  cartProducts: cartSlice.reducer,
  adminData: adminOrdersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
