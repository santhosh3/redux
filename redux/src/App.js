import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Order from './Order'
import Home from './Home'
import NotFound from './NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/orders' element = {<Order />} />
            <Route path='*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
