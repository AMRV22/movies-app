import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./router/routes";

const App = () => {
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
