import React from "react";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import NavigationComponent from "./components/navigationComponent";

const App = () => {
  return (
    <div className='bg-gray-100'>
      <NavigationComponent />
      <LoginScreen />
    </div>
  );
};

export default App;
