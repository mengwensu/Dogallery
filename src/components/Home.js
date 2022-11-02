import React, { Component }  from 'react';
import Header from "./Header";
import {BsArrowRight} from "react-icons/fa";
const Home = () => {
  return (
    <div className="Home">
        <Header/>
        <div className="homeCircle">
            <div class="welcome">
                <h1 class="title1">WELCOME TO</h1>
                <h1 class="title2">DOGALLERY</h1>
                <p className="homeMessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, a id! Cum nostrum dolorem sit, atque minima exercitationem odit, vero fugiat sunt corrupti ea ut voluptates adipisci totam vitae nisi!</p>        
                <button className="exploreButton">Explore Dog Breeds </button>
            </div>  
        </div>
    </div>
    
  )
}


export default Home