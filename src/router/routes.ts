import { lazy, LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";
import PrivateRoute, { PrivateRouteProps } from "./privateRoute/PrivateRoute";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./protectedRoute/ProtectedRoute";

const LoginPage = lazy(() => import("./../pages/loginScreen/"));
const HomePage = lazy(() => import("./../pages/homeScreen/"));
const DetailPage = lazy(() => import("./../pages/detailScreen/"));
const FavoritePage = lazy(() => import("./../pages/favoriteScreen/"));

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
    path: "/:id",
    type: PrivateRoute,
    component: DetailPage,
  },
  {
    path: "/favorites",
    type: PrivateRoute,
    component: FavoritePage,
  },
];

export default routes;
