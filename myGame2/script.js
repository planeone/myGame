const shaderV=document.querySelector("#vertex").text;
const shaderF=document.querySelector("#fragment").text;


const canvas=document.getElementById("canvas1");
const canvas2=document.getElementById("canvas2");

const gl=canvas.getContext("webgl");
const ctx=canvas2.getContext("2d");

function Translate(x,y,z){
	return [1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			x,y,z,1]
}



function Scale(x,y,z){
	return [x,0,0,0,
	        0,y,0,0,
			0,0,z,0,
			0,0,0,1]
}

function RotateX(x){
	const cos=Math.cos(x);
	const sin=Math.sin(x);
	return [1,0,0,0,
	        0,cos,sin,0,
			0,-sin,cos,0,
			0,0,0,1]
}

function RotateY(y){
	const cos=Math.cos(y);
	const sin=Math.sin(y);
	return [cos,0,sin,0,
			0,1,0,0,
			-sin,0,cos,0,
			0,0,0,1]
}

function RotateZ(z){
	const cos=Math.cos(z);
	const sin=Math.sin(z);
	return [cos,sin,0,0,
			-sin,cos,0,0,
			0,0,1,0,
			0,0,0,1]
}

function draw3d(vertex,index,polygon,shaderVertex,shaderFragment,matrix1,matrix2,matrix3,matrix4,matrix5){
	canvas.width=gl.canvas.width;
	canvas.height=gl.canvas.height;
	gl.viewport(canvas.width/2-gl.canvas.height/2,0,gl.canvas.height,gl.canvas.height);
	
	const shader1=gl.createShader(gl.VERTEX_SHADER);
	const shader2=gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(shader1,shaderVertex);
	gl.shaderSource(shader2,shaderFragment);
	
	gl.compileShader(shader1);
	gl.compileShader(shader2);
	
	console.log(gl.getShaderInfoLog(shader1));
	console.log(gl.getShaderInfoLog(shader2));
	
	const program=gl.createProgram();
	
	gl.attachShader(program,shader1);
	gl.attachShader(program,shader2);
	
	gl.validateProgram(program);
	gl.linkProgram(program);
	
	console.log(gl.getProgramInfoLog(program));
	
	const vertexBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertex),gl.STATIC_DRAW);
	
	const point=gl.getAttribLocation(program,"a_vertex");
	const color=gl.getAttribLocation(program,"a_color");
	
	gl.vertexAttribPointer(point,3,gl.FLOAT,false,24,0);
	gl.enableVertexAttribArray(point);
	gl.vertexAttribPointer(color,3,gl.FLOAT,false,24,12);
	gl.enableVertexAttribArray(color);
	
	const indexBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
	
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(index),gl.STATIC_DRAW);
	
	gl.useProgram(program);
	const uMatrix1=gl.getUniformLocation(program,"u_matrix1");
	const uMatrix2=gl.getUniformLocation(program,"u_matrix2");
	const uMatrix3=gl.getUniformLocation(program,"u_matrix3");
	const uMatrix4=gl.getUniformLocation(program,"u_matrix4");
	const uMatrix5=gl.getUniformLocation(program,"u_matrix5");
	gl.uniformMatrix4fv(uMatrix1,false,matrix1);
	gl.uniformMatrix4fv(uMatrix2,false,matrix2);
	gl.uniformMatrix4fv(uMatrix3,false,matrix3);
	gl.uniformMatrix4fv(uMatrix4,false,matrix4);
	gl.uniformMatrix4fv(uMatrix5,false,matrix5);
	gl.drawElements(polygon,index.length,gl.UNSIGNED_SHORT,0);
	
	gl.deleteShader(shader1);
	gl.deleteShader(shader2);
	gl.deleteProgram(program);
	gl.deleteBuffer(vertexBuffer);
	gl.deleteBuffer(indexBuffer);
	
}

let xRot=0
let yRot=0
let zRot=0

function drawGame(){
	console.log(Translate(1,0,1))
	draw3d([-0.5,-0.5,-0.5,
	        1.0,0.0,0.0,
			0.5,-0.5,-0.5,
			0.0,1.0,0.0,
			0.5,-0.5,0.5,
			0.0,0.0,1.0,
			-0.5,-0.5,0.5,
			0.0,1.0,1.0,
			-0.5,0.5,-0.5,
	        1.0,1.0,0.0,
			0.5,0.5,-0.5,
			0.0,0.0,0.0,
			0.5,0.5,0.5,
			1.0,0.0,1.0,
			-0.5,0.5,0.5,
			1.0,1.0,1.0,],[0,1,2,2,3,0,4,5,6,6,7,4,0,4,5,5,1,0,1,5,6,6,2,1,2,6,7,7,3,2,3,7,4,4,0,3],gl.TRIANGLES,shaderV,shaderF,Translate(0,0,0),RotateX(xRot),RotateY(yRot),RotateZ(zRot),Scale(1,1,1));
	
}

function clear(){
	gl.clearColor(0,1,1,1);
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
}

function cycle(){
	clear();
	drawGame();
	xRot+=0.01;
	yRot+=0.01;
	zRot+=0.01;
	requestAnimationFrame(cycle);
}

cycle();