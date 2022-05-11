import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import ListPatients from '../pages/listPatientsPage/ListPatients'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/listPatients/:name' element={<ListPatients/>}/>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router