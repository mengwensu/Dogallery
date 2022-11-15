import React, { Component, useState }  from 'react';
import { useParams } from 'react-router-dom';
import dogArr from "../dogList.json"

/* Three.js Imports */
import * as THREE from '../../node_modules/three/build/three.module.js';
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

console.log(THREE);

const canvas = document.querySelector('.webg1');
const scene = new THREE.Scene();

/* Load model */
const loader = new GLTFLoader();
loader.load('Models/GreatDane.glb', function(glb){

    /* Create Model */
    console.log(glb);
    const root = glb.scene;
    
    /* Set Model Scale */
    root.scale.set(0.04, 0.04, 0.04);

    /* Set Model Position */
    //root.position.setX();
    root.position.setY(-0.5);
    //root.position.setZ();

    /* Set Model Roation */
    root.rotation.x = 4.8;
    //root.rotation.y = 0.0;
    root.rotation.z = 1;

    /* Add Model to Scene */
    scene.add(root);

 /* Model loading diagnostics */ 
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('An error occurred')
})

/* Light creation to see model  */
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(2,2,5)
scene.add(light)

const light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);


/*  Builder plate 
 *  Set Scene Sizes and constants
 */
const sizes = {
    width: 400, //window.innerWidth,
    height: 400 //window.innerHeight
};

/* Camera Creation */
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
camera.position.set(0,1,2);
scene.add(camera);



/* Renders all elements to manipulate the scene, camera, and model */
const renderer = new THREE.WebGL1Renderer({
    _canvas: canvas,
    alpha: true,
    position: 0
});

/* Render sets */
renderer.setClearColor(0x000000, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;

/* orbital controls */
var controls = new OrbitControls( camera, renderer.domElement);
controls.update();

/* Animates it all */
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    controls.update();
}
animate();


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