import React from 'react'
import logoPharma from "../../assets/logoPharma1.jpeg"
import { useNavigate } from "react-router-dom";
import { gotoPageDetails } from '../../routers/coordinators';

const HomePage = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    gotoPageDetails(navigate)
  }, 5000);


  return (
    <div className="flex items-center justify-center mt-20">
      <img className="w-2/4 h-2/4 rounded-xl drop-shadow-2xl" src={logoPharma} alt='logoPharma'/>
    </div>

  )
}

export default HomePage