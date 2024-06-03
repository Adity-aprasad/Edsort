import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./pages/Layout";
import Home from './pages/Home.js';
import Log from './pages/Log.js'; 
import Nopage from './pages/Nopage.js';
import Quiz from './pages/Quiz.js';
//import Page-1 from './pages/Page-1.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/Nopage' element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);
