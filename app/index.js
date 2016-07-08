import './utils/webvr-polyfill';
import WEBVR from './utils/WebVR';
import Webgl from './Webgl';
import raf from 'raf';
import dat from 'dat-gui';
import 'gsap';

let webgl;
let gui;

function animate() {
  raf( animate );

  webgl.render();
}

function resizeHandler() {
  webgl.resize( window.innerWidth, window.innerHeight );
}

if ( WEBVR.isLatestAvailable() === false ) {
  document.body.appendChild( WEBVR.getMessage() );
}

// webgl settings
webgl = new Webgl( window.innerWidth, window.innerHeight );
document.body.appendChild( webgl.renderer.domElement );

// GUI settings
gui = new dat.GUI();
gui.add( webgl.params, 'usePostprocessing' );

// handle resize
window.addEventListener( 'resize', resizeHandler );

// let's play !
animate();
