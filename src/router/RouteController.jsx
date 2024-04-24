import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleMovie from './single-movie/SingleMovie'
import Movies from '../pages/movies/Movies'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='/movies' element={<Movies/>}/>
    </Routes>
  )
}

export default RouteController
