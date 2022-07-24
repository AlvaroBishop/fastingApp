import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Clock } from './components/Clock/Clock'
import { Home } from './components/Home/Home'

export const AppRoutes = () => {
  return (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/clock' element={<Clock/>}/>
        </Routes>
    </App>
  )
}
