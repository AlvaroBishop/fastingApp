import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Clock } from './components/Clock/Clock'
import { Food } from './components/Food/Food'
import { Home } from './components/Home/Home'

export const AppRoutes = () => {
  return (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/clock' element={<Clock/>}/>
            <Route path='/food' element={<Food/>}/>
        </Routes>
    </App>
  )
}
