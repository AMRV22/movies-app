import React, { Suspense, useEffect } from "react";
import { Navigate } from "react-router-dom";

export type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const tokenExist = localStorage.getItem("user-token");

  if (!tokenExist) {
    return <Navigate to='/login' replace />;
  }

  return <Suspense fallback={<>...</>}>{children}</Suspense>;
};

export default PrivateRoute;
