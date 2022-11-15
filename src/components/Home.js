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
                <p className="homeMessage">Welcome to Dogallery! The fun and easy tool meant to enhance your learning experience with man’s best friend! So come one, and come all to explore the vast world of everyone’s favorite pet, through the use of 3D models!</p>        
                <a href="/categories" className="exploreButton">Explore Dog Breeds <TfiArrowRight/></a>
            </div>  
        </div>
    </div>
    
  )
}
export default Home
