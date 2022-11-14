import React, { Component, useState }  from 'react';
import { useParams } from 'react-router-dom';
import dogArr from "../dogList.json"

/* Three.js Imports */
import * as THREE from 'three/build/three.module.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
/*
console.log(THREE);

const canvas = document.querySelector('.webg1')
const scene = new THREE.scene

renderer.setSize(sizes.width, sizes.hegiht);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true*/

const History = () => {
  const { dogname } = useParams();
    return (
      <div className='displayBody'>
        <div className='displayIcon'>

        <div className="displayModel">
        
        
          <script src='./Model.js'></script>
          <script>

          </script>

        </div>

        </div>
           <div className='boxContent'>
               <h2 className='dogName'>{dogname}</h2> 
               <div className='dogTitle'>
                  {
                  dogArr.filter(dog => dog.name === dogname).map(filteredDog => (
                    <div>
                      <p className='historyInfo'>{filteredDog.history}</p>
                    </div>
                  ))}
               </div>
              
           </div>
        </div>


  )
}

export default History