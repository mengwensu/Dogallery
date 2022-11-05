import React, { Component }  from 'react';
import Home from "./components/Home";
import Categories from "./components/Categories";
import Display from './components/Display';
import Contact from './components/Contact';
import About from './components/About';
import FAQ from './components/FAQ';
import NavBar from './components/Navbar';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/display" element={<Display/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>

    </div>
    </>
  )
}

export default App;
