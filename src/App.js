import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/Navbar';
import Home from "./components/Home";
import Categories from "./components/Categories";
import Display from './components/Display';
import Contact from './components/Contact';
import About from './components/About';
import FAQ from './components/FAQ';
import Search from './components/Search';
import TestModel from './TestModel';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/display/:dogname" element={<Display />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:keyword" element={<Search />} />

        </Routes>

      </div>
    </>
  )
}

export default App;
