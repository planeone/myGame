const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);

const render=new THREE.WebGLRenderer();

document.body.prepend(render.domElement);
render.domElement.id="background";

const pointLight=new THREE.PointLight(0xffffff,1);
const directLight=new THREE.DirectionalLight(0xffffff,0.3);

render.setSize(window.innerWidth,window.innerHeight);

const texture=new THREE.TextureLoader();
const obj=new THREE.OBJLoader();

let mesh=null;

obj.load("Dice.obj",function(object){
	scene.add(object);
	mesh=object;
});


scene.background=texture.load("banner.jpg");

camera.position.z=10;
pointLight.position.set(-5,0,5);
directLight.position.set(5,0,5);

scene.add(pointLight);
scene.add(directLight);

window.addEventListener("resize",function(event){
	render.setSize(window.innerWidth,window.innerHeight);
	camera.aspect=window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	if(window.innerWidth<window.innerHeight){
		mesh.scale.set(0.5,0.5,0.5);
	}else{
		mesh.scale.set(1,1,1);
	}
});

function cycle(){
	requestAnimationFrame(cycle);
	render.render(scene,camera);
	mesh.rotation.x+=0.01;
	mesh.rotation.y+=0.01;
	mesh.rotation.z+=0.01;
}

cycle();