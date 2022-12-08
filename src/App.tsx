import React from "react";
import LoginScreen from "./pages/loginScreen";
import NavigationComponent from "./components/navigationComponent";
import HomeScreen from "./pages/homeScreen";
import DetailScreen from "./pages/detailScreen";

const App = () => {
  return (
    <div className='bg-white'>
      <NavigationComponent />
      <DetailScreen />
      {/* <HomeScreen /> */}
    </div>
  );
};

export default App;
