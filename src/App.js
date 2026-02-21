import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home.jsx'
import Child from './views/child/Child.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/child' element={<Child />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App