import './App.css';
import React from 'react';
import Home from './component/Home';
import Login from './component/Login';
import Reg from './component/Reg';
import AboutUs from './component/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './component/ContactUs';
import ImageGallery from './component/f&g';
import ImageGallerycho from './component/cho';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/f&g" element={<ImageGallery/>} />
          <Route path="/cho" element={<ImageGallerycho/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
