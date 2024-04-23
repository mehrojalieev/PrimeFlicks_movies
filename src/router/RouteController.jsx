import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import SingleMovie from './single-movie/SingleMovie'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<SingleMovie/>}/>
    </Routes>
  )
}

export default RouteController
