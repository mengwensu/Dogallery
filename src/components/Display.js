import React, { Component, useState }  from 'react';
import History from './History';
import BiologicalInfo from './BiologicalInfo';
import Video from './Video';
import BreedEvol from './BreedEvol';

/* Three.js Imports */
import * as THREE from 'three/build/three.module.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

/*
console.log(THREE);
const canvas = document.querySelector('.webg1');
const scene = new THREE.Scene();


// Boiler Plate Code
const sizes = {
    width: 400,
    hegiht: 400
};

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.hegiht, 0.1, 1000);
camera.position.set(0,1,2)
scene.add(camera);



const renderer = new THREE.WebGL1Renderer({
    _canvas: canvas
})

renderer.setSize(sizes.width, sizes.hegiht);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true
*/
const Display = () => {
    const [current, setCurrent] = useState('History');

    return (
        <div className="Display">
            <div className="displayTabs">

                <button className="tabs" id={current === 'History'? 'active' : 'inactive'} onClick={() => setCurrent('History')}>HISTORY</button>
                <button className="tabs" id={current === 'Biological Information'? 'active' : 'inactive'} onClick={() => setCurrent('Biological Information')}>BIOLOGICAL INFORMATION</button>
                <button className="tabs" id={current === 'Video'? 'active' : 'inactive'} onClick={() => setCurrent('Video')}>VIDEO</button>
                <button className="tabs" id={current === 'Breed Evolution'? 'active' : 'inactive'} onClick={() => setCurrent('Breed Evolution')}>BREED EVOLUTION</button>
                
            </div>

            <div className="displayBody">

                {current === 'History'? <History/> : ''}
                {current === 'Biological Information'? <BiologicalInfo/> : ''}
                {current === 'Video'? <Video/> : ''}
                {current === 'Breed Evolution'? <BreedEvol/> : ''} 
        
                </div>
               <div className="categoryCircle"></div>

            <div className="displayModel">
                

            </div>

            </div>

            
  )
}
export default Display