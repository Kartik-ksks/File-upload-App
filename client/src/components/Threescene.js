import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";


class ThreeScene extends Component {
  constructor(props) {
    super(props);
  }
    componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 8;
    this.camera.position.y = 5;
    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    //ADD Your 3D Models here

    var objLoader = new THREE.OBJLoader();

    objLoader.load("./uploads/this.props.asset",
    object => {
    this.freedomMesh = object;
    this.freedomMesh.position.setY(3); //or  this
    this.freedomMesh.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.freedomMesh);
    },
    xhr => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    error => {
    console.log("An error happened" + error);
    });

    this.renderScene();
    //start animation
    this.start();
    }
    start = () => {
    if (!this.frameId) {
    this.frameId = requestAnimationFrame(this.animate);}
    };
    stop = () => {
    cancelAnimationFrame(this.frameId);
    };
    animate = () => {
    //Animate Models Here
    //ReDraw Scene with Camera and Scene Object
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
    };
    renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {

  return (<div
  style={{ width: "800px", height: "800px" }}
  ref={mount => { this.mount = mount}}
  />)
}}

export default ThreeScene;
