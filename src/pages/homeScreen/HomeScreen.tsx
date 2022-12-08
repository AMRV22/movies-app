import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/login")}>HOLA</div>;
};

export default HomeScreen;
