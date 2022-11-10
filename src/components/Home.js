import React, { Component }  from 'react';
import {TfiArrowRight} from "react-icons/tfi";
const Home = () => {
  return (
    <div className="Home">
      {/* <img src="images/homeBackground.png" alt="homeBackground"></img> */}
        <div className="homeCircle">
            <div class="welcome">
                <h1 class="title1">WELCOME TO</h1>
                <h1 class="title2">DOGALLERY</h1>
                <p className="homeMessage">Hello and welcome to Dogallery,a place where you can find information on different dog breeds and get a better idea of their size and appearance through the use of 3D models!</p>        
                <a href="/categories" className="exploreButton">Explore Dog Breeds <TfiArrowRight/></a>
            </div>  
        </div>
    </div>
    
  )
}
export default Home
