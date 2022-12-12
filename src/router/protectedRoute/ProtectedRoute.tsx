import React, { Suspense, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";

export type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const tokenExist = localStorage.getItem("user-token");
  if (tokenExist && tokenExist.length > 0) {
    return <Navigate to='/' replace />;
  }

  return <Suspense fallback={<LoadingAnimation size={800} />}>{children}</Suspense>;
};

export default ProtectedRoute;
