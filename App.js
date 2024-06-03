import {BroswerRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Layout from "./pages/Layout";
import Home from './pages/Home.js';
import Log from './pages/Log.js'; 
import Nopage from './pages/Nopage.js';
import Quiz from './pages/Quiz.js';

export default function App() {
  return (
  <div>
    <BroswerRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/takequiz' element={<Takequiz/>}/>
      <Route path='/Nopage' element={<Nopage/>}/>
    </Routes>
    </BroswerRouter>
  </div>
  );
}

export default App;
