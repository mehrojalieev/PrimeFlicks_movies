import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleMovie from './single-movie/SingleMovie'
import Movies from '../pages/movies/Movies'
import People from '../pages/people/People'
import Wishlist from '../pages/wishlist/Wishlist'
import SinglePerson from './single-person/SinglePerson'
import TvShows from '../pages/tv-shows/TvShows'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='people-info/:id' element={<SinglePerson/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/tv-shows' element={<TvShows/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  )
}

export default RouteController
