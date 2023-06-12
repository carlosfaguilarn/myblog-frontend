import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EntryDetail from './components/entities/EntryDetail';
import Home from './components/home/Home';

export default function App() {
  return (
    <div className={`app`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entry/:id' element={<EntryDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}; 
