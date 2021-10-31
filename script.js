const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);

const render=new THREE.WebGLRenderer();

document.body.prepend(render.domElement);
render.domElement.id="background";

const pointLight=new THREE.PointLight(0xffffff,0.5);
const directLight=new THREE.DirectionalLight(0xffffff,0.5);


const texture=new THREE.TextureLoader();
const obj=new THREE.OBJLoader();

obj.load("Dice.obj",function(object){
	scene.add(object);
	mesh=object;
});



scene.background=texture.load("banner.jpg");

camera.position.z=10;
pointLight.position.z=10;
directLight.position.z=10;

scene.add(pointLight);
scene.add(directLight);

function cycle(){
	requestAnimationFrame(cycle);
	render.setSize(window.innerWidth,window.innerHeight);
	render.render(scene,camera);
}

cycle();