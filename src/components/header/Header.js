import React from "react";
import logoPharma from "../../assets/logoPharma1.jpeg";
import { useNavigate } from "react-router-dom";
import { nextHome } from "../../routers/coordinators";

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center  p-4 bg-blue-700 sm: w-full h-16" >
      <img className="w-16 h-16" src={logoPharma} alt="logoPharma"/>
      <h1 className="text-3xl italic tracking-widest">Pharma</h1>
      <button className="underline hover:text-blue-400" onClick={() => nextHome(navigate)}>Home</button>
    </div>
  )
};

export default Header;
