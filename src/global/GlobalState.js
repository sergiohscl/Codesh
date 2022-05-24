import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/URL';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    const [patients, setPatients] = useState([]);
    const [info, setInfo] = useState([]);
    
    const listPatients = () => {
      axios.get(`${BASE_URL}/?results=50`)
        .then((res)=> setPatients(res.data.results))
        .catch((error) => console.log(error.message))        
    }     
   
    useEffect(() => {
        listPatients();
    },[])

    useEffect(()=> {
      const newList = [];
      info.forEach((item) => {
        axios.get(`${BASE_URL}/${item.name.first}`)
        .then((response) =>{
          newList.push(response.data.results)
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) =>{
              return a.id - b.id
            })
            setPatients(orderedList)
          }
        })
        .catch((error) => console.log(error.message))      
      })
    }, [info]);        

    const data = {
        patients,
        setPatients,
        info,
        setInfo,
        open,
        setOpen,
        handleOpen,
        handleClose
    }

  return (
    <GlobalStateContext.Provider value ={data}>
        {props.children}
    </GlobalStateContext.Provider> 

  )
}

export default GlobalState;
