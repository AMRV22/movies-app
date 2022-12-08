import React, { Suspense } from "react";

export type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return <Suspense fallback={<>...</>}>{children}</Suspense>;
};

export default PrivateRoute;
