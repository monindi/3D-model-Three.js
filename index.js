import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Instantiate a loader
const loader = new GLTFLoader();
loader.load('models/DODGE/scene.gltf',
  // Called when the resource is loaded
  function (gltf) {
    scene.add(gltf.scene);

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
  },
  // Called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  // Called when loading has errors
  function (error) {
    console.log('An error happened');
  }
);
