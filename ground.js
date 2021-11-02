import * as THREE from './three.js/build/three.module.js'

export const Ground = () =>{
    let object_geometry = new THREE.PlaneGeometry(100, 100)
    let texture = new THREE.TextureLoader().load('./textures/grass.jpg')
    texture.wrapT = THREE.RepeatWrapping
    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.set(100, 100)
    let material = new THREE.MeshBasicMaterial({
        map : texture
    })
    let object = new THREE.Mesh(object_geometry, material)
    object.receiveShadow = true
    object.rotation.set(-Math.PI / 2, 0, 0)
    return object
}