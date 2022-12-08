import React, { Suspense } from "react";
export type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <Suspense fallback={<>...</>}>{children}</Suspense>;
};

export default ProtectedRoute;
