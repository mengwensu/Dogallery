import { useState, useEffect, useRef } from "react";
import React, { Component }  from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function loadGLTFModel(scene, glbPath) {
  //const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (glb) => {
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
    });
  });
}

/*
function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}*/

const Dinosaur = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const canvas = document.querySelector('.webg1');
      const renderer = new THREE.WebGL1Renderer({
        _canvas: canvas,
        antialias: true,
        //alpha: true
      });

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.shadowMap.enabled = true;
      renderer.gammaOutput = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      //container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      //const scale = 5.6;
      const camera = new THREE.PerspectiveCamera(75, scW/scH, 0.1, 1000);
      camera.position.set(0,1,2);
      scene.add(camera);

      /* Light creation to see model  */
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(2,2,5)
        scene.add(light)

        const light1 = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light1);

        const light2 = new THREE.PointLight(0xffffff, 0.5);
        scene.add(light2);

        /* orbital controls */
        var controls = new OrbitControls( camera, renderer.domElement);
        controls.update();


      loadGLTFModel(scene, "./GreatDane.glb").then(() => {
        animate();
        setLoading(false);
      });
      
     /* let req = null;
      let frame = 0;*/
      const animate = () => {
        /*req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }*/
        
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();
      };

      return () => {
        //cancelAnimationFrame(req);
        //renderer.dispose();
        animate();
      };
    }
  }, []);

  return (
    <div
      style={{ height: "540px", width: "540px", position: "relative" }}
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
            Loading...
        </span>
      )}
    </div>
  );
};

export default function TestModel() {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <p>Click and hold to move around</p>
      <p>
        Credits for the model: "Dinosaur" (https://skfb.ly/6ZBXA) by
        jeilocreativedesignworld is licensed under Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </p>
      <Dinosaur />
    </div>
  );
}
