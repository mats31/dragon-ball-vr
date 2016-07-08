import Sphere from './objects/Sphere';
import THREE from 'three';
import WEBVR from './utils/WebVR';
require( './utils/VRControls.js' )( THREE );
require( './utils/VREffect.js' )( THREE );

export default class Webgl {
  constructor( width, height ) {
    this.params = {
      usePostprocessing: false,
    };

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    this.renderer.setClearColor( 0x262626 );

    this.controls = new THREE.VRControls( this.camera );
    this.effect = new THREE.VREffect( this.renderer );
    if ( WEBVR.isAvailable() === true ) {
      document.body.appendChild( WEBVR.getButton( this.effect ) );
    }

    this.composer = null;

    this.sphere = new Sphere();
    this.sphere.position.set( 0, 0, 0 );
    this.scene.add( this.sphere );
  }

  resize( width, height ) {

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.effect.setSize( width, height );
  }

  render() {
    this.controls.update();
    this.effect.render( this.scene, this.camera );
  }
}
