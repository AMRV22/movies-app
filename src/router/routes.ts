import { lazy, LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";
import PrivateRoute, { PrivateRouteProps } from "./privateRoute/PrivateRoute";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./protectedRoute/ProtectedRoute";

const LoginPage = lazy(() => import("./../pages/loginScreen/LoginScreen"));
const HomePage = lazy(() => import("./../pages/homeScreen/HomeScreen"));

type Route = RouteProps & {
  type: (props: PrivateRouteProps | ProtectedRouteProps) => JSX.Element;
  component: LazyExoticComponent<() => JSX.Element>;
};

const routes: Route[] = [
  {
    path: "/login",
    type: ProtectedRoute,
    component: LoginPage,
  },
  {
    path: "/",
    index: true,
    type: PrivateRoute,
    component: HomePage,
  },
];

export default routes;
