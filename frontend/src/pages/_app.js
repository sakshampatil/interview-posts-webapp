import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { store, persistedStore } from "../store/index";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ProtectedRoutes>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </ProtectedRoutes>
      </PersistGate>
    </Provider>
  );
}
