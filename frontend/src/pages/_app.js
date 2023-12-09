import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import store from "../store/index";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    console.log("localstorage", localStorage.getItem("user"));
    if (localStorage.getItem("user")) router.replace("/");
    else router.replace("/auth/login");
  }, []);

  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
