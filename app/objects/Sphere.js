import THREE from 'three';

export default class Cube extends THREE.Object3D {
  constructor() {
    super();

    this.geometry = new THREE.SphereGeometry( 50, 60, 40 );
    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load( 'textures/sphere.jpg' ),
      side: THREE.DoubleSide,
      // wireframe: true,
    });
    this.mesh = new THREE.Mesh( this.geometry, this.material );

    this.add( this.mesh );
  }
}
