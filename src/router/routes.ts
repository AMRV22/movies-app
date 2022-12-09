import { lazy, LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";
import PrivateRoute, { PrivateRouteProps } from "./privateRoute/PrivateRoute";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./protectedRoute/ProtectedRoute";

const LoginPage = lazy(() => import("./../pages/loginScreen/LoginScreen"));
const HomePage = lazy(() => import("./../pages/homeScreen/HomeScreen"));
const DetailPage = lazy(() => import("./../pages/detailScreen/DetailScreen"));

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
  {
    path: "/movie-detail/:id",
    type: PrivateRoute,
    component: DetailPage,
  },
];

export default routes;
