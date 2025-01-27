"use client";
import { persistor, store } from "@/lib/redux/store";
// import { AppStore, makeStore } from "@/lib/redux/store";
// import { useRef } from "react";
// import { Provider } from "react-redux";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore | null>(null);
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = makeStore();
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({children}: {children: React.ReactNode}) => {
    return(
        <Provider store={store}>
            <PersistGate loading={<div>Loading..</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider;