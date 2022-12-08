import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useAppDispatch from "./utils/hook/useAppDispatch";
import routes from "./router/routes";
import { setToken, setUser } from "./store/slice/user";

const App = () => {
  const dispatcher = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    const email = localStorage.getItem("user-email");

    if (token && token.length > 0) {
      dispatcher(setToken(token));
    }
    if (email && email.length > 0) {
      dispatcher(setUser(email));
    }
  }, [dispatcher]);

  return (
    <Routes>
      {routes.map(({ type: RouteType, component: Component, ...rest }) => (
        <Route
          key={rest.path}
          {...rest}
          element={
            <RouteType>
              <Component />
            </RouteType>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
