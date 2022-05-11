import { useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

const Modal = ({ setModalOn, setChoice }) => {
  const { name } = useParams();
  const { patients } = useContext(GlobalStateContext);
  const [selectedPatients, setSelectdPatients] = useState({});

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  useEffect(() => {
    const currentPatients = patients.find((row) => {
      return row.name.first === name;
    });
    setSelectdPatients(currentPatients);
  }, []);

  return (
    <div className="bg-transparent fixed inset-0 flex h-screen justify-center items-center">
     
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 shadow">
        {selectedPatients && selectedPatients.picture && (
        <img class="w-24 h-24 rounded-full mx-auto" src={selectedPatients.picture.large} alt="" width="384" height="512"/>
        )}
      <div class="pt-6 text-center space-y-4">        
        <figcaption class="font-medium">
          {selectedPatients && selectedPatients.name && (
          <div class="text-blue-500 dark:text-blue-400">
            {name} {selectedPatients.name.last}
          </div>
          )}          
          <div class="text-slate-700 dark:text-slate-500">
            {selectedPatients && selectedPatients.email}
          </div>          
          <div class="text-slate-700 dark:text-slate-500">
            gender: {selectedPatients && selectedPatients.gender}
          </div>
          {selectedPatients && selectedPatients.dob && (
          <div class="text-slate-700 dark:text-slate-500">
            {moment(selectedPatients.dob.date).format('DD/MM/YYYY')}
          </div>
          )}
          <div class="text-slate-700 dark:text-slate-500">
            cell: {selectedPatients && selectedPatients.cell}
          </div>
          {selectedPatients && selectedPatients.location && (
          <div class="text-slate-700 dark:text-slate-500">
            {selectedPatients.location.city}, {selectedPatients.location.country}
          </div>
          )}          
        </figcaption>
      </div>
      <button onClick={handleCancelClick}
        className="mt-5 rounded px-4 py-2 text-white bg-blue-700 hover:bg-blue-900"
        >Close</button>
      </figure>      
    </div>
  );
};

export default Modal;
        
