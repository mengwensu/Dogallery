import * as THREE from 'three';
import {GLTFLoader} from 'three.js-master/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three.js-master/examples/jsm/controls/OrbitControls.js';

console.log(THREE);

const canvas = document.querySelector('.webg1');
const scene = new THREE.Scene();


/*  Builder plate 
 *  Set Scene Sizes and constants
 */
const sizes = {
    _width: 400, //window.innerWidth,
    _height: 400 //window.innerHeight
};

/* Camera Creation */
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
camera.position.set(0,1,2);
scene.add(camera);



/* Renders all elements to manipulate the scene, camera, and model */
const renderer = new THREE.WebGL1Renderer({
    _canvas: canvas,
   // _alpha: true,
    //_position: 0
});

/* Render sets */
renderer.setClearColor(0x000000, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
