import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';

export default function App() {
  return (
    <div className={`app`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}; 
