import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (
      (isAuthenticated && router.pathname === "/auth/login") ||
      (isAuthenticated && router.pathname === "/auth/signup")
    ) {
      router.push("/");
    } else if (!isAuthenticated && router.pathname !== "/auth/login") {
      if (router.pathname !== "/auth/signup") router.push("/auth/login");
    }
  }, [isAuthenticated]);

  //   if (typeof window !== "undefined") {

  //   }

  return children;
};

export default ProtectedRoutes;
