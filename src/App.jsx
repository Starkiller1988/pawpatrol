import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import WelcomePage from '../pages/WelcomePage'
import MemoryPage from '../pages/MemoryPage'
import Vocabulator from '../pages/Vocabulator'
import AboutPage from '../pages/AboutPage'
import PawIndex from '../pages/PawIndex'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/memory' element={<MemoryPage />} />
        <Route path='/vocabulator' element={<Vocabulator />} />
        <Route path='/index' element={<PawIndex />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>

  )
}

export default App
