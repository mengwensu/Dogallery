import React, { Component, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import dogArr from "../dogList.json"

/* Three.js Imports */
import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { ImageLoader } from 'three';

console.log(THREE);

function startRenderer(modelFile, diffuseMap, bumpMap) {
  const canvas = document.querySelector('.webg1');
  console.log("The canvas", canvas);
  const scene = new THREE.Scene();


  const textureLoader = new THREE.TextureLoader();


  const diffuseTexture = diffuseMap && textureLoader.load(
    diffuseMap
  );
  const bumpTexture = bumpMap && textureLoader.load(
    bumpMap
  );

  /* Load model */
  const loader = new GLTFLoader();
  // loader.load('/Models/GreatDane.glb', function (glb) {
  loader.load(modelFile, function (glb) {

    /* Create Model */
    console.log("GLB file loaded", glb);
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

    let model = root.children[0];

    if (diffuseTexture) {
      model.material.map = diffuseTexture;
    }

    if (bumpTexture) {
      model.material.bumpMap = bumpTexture;
    }

    /* Add Model to Scene */
    scene.add(root);


    /* Model loading diagnostics */
  }, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + "% loaded");
  }, function (error) {
    console.log(`Could not load file: ${error}`);
  })
  // loadModel({ 
  //   glb: "/Models/GreatDane.jpg",
  //   bump: "/Models/Great_Dane_bump.jpg",
  //   diffuse: "/Models/Great_Dane_dif.jpg"
  // })

  /* Light creation to see model  */
  const light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(2, 2, 5)
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
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.set(0, 1, 2);


  scene.add(camera);



  /* Renders all elements to manipulate the scene, camera, and model */
  const renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    alpha: true,
    position: 0
  });

  /* Render sets */
  renderer.setClearColor(0x000000, 0);
  // renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.gammaOutput = true;

  /* orbital controls */
  var controls = new OrbitControls(camera, renderer.domElement);
  // controls.minPolarAngle = Math.PI / 2.0;
  // controls.maxPolarAngle = Math.PI / 2.0;
  controls.update();

  return {
    renderer,
    scene,
    camera,
    controls
  };
}

/* Animates it all */
function animate(renderer, scene, camera, controls) {
  requestAnimationFrame(() => {
    animate(renderer, scene, camera, controls);
  });
  console.log("animate");
  renderer.render(scene, camera);
  controls.update();
}
// animate();


const History = () => {
  const { dogname } = useParams();
  console.log("dogarray", dogArr.filter(dog => dog.name === dogname));
  const dogData = dogArr.filter(dog => dog.name === dogname)[0];
  console.log("dogdata", dogData);

  const canvasEl = useRef(null);
  const imgEl = useRef(null);


  useEffect(() => {
    console.log('test', dogname);


    if (dogData.model) {
      console.log("model", dogData.model);
      let {
        renderer,
        scene,
        camera,
        controls
      } = startRenderer(
        // "/Models/GreatDane.glb"
        dogData.model,
        dogData.diffuseMap,
        dogData.bumpMap
      );

      animate(renderer, scene, camera, controls);

    } else {
      console.log("nomodel", dogData.model);
      imgEl.current.src = dogData.image;
      canvasEl.current.hidden = true;
    }
  });

  return (
    <div className='displayBody'>
      <div className='displayIcon'>

          <canvas ref={canvasEl} className='webg1'></canvas>
          <img ref={imgEl} className="dogimage" />

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
