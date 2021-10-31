
const canva=document.getElementById("canvas")
const ctx=canva.getContext('2d')

const canvas=new Image()
const platformImage=new Image()
const ball=new Image()
const ship=new Image()
const ship2=new Image()
const ship2_anime=new Image()
const portal=new Image()

const myButton=document.querySelector("#Button")

canvas.src="image/nebo.png"
platformImage.src="image/platform.png"
ball.src="image/ball.png"
ship.src="image/ship.png"
ship2.src="image/ship2.png"
ship2_anime.src="image/ship2_anime.png"
portal.src="image/portal.png"

let positionY=200
let positionX=390

let moveX=-10


let cycle=true

let stop=false

let gameOver=false
let youChempion=false

let img=ship2

myButton.onmousedown=function(){
	if(stop==false){
		cycle=false
		stop=true
		myButton.src="image/myButton2.png"
	}
	else if(stop==true){
		cycle=true
		stop=false
		myButton.src="image/myButton.png"
	}
    	
}

document.onkeypress=function(event){
	if(event.key=="d"){
		if(cycle==true){
			PleyerColid.position.x+=xPleyer2*PleyerColid.speed*0.5
		}
	}
	if(event.key=="a"){
		if(cycle==true){
			PleyerColid.position.x-=xPleyer*PleyerColid.speed*0.5
		}
	}
	if(event.key=="w"){
		if(cycle==true){
			PleyerColid.constraintImpulse.y-=yPleyer
		}
	}
}

function random(x){
	return Math.random()*x+0.3
}
function colid(object1,object2,radius){
	return Math.sqrt((object1[0]-object2[0])**2+(object1[1]-object2[1])**2)<=radius[0]+radius[1]
}

function draw(){
	ctx.drawImage(canvas,0,0,1010,600)
	ctx.drawImage(platformImage,290,270,525,400)
	ctx.drawImage(platformImage,0,520,800,100)
	ctx.drawImage(portal,650,200,100,100)
	ctx.drawImage(ball,PleyerColid.position.x,PleyerColid.position.y-50,100,100)
	ctx.drawImage(ship,530,200,100,100)
	ctx.drawImage(img,positionX,positionY,100,100)
	
}
ball.onload=draw 
function game(){
	positionX+=moveX
	if(PleyerColid.position.x<=0){
		xPleyer=0
	}
	else{
		xPleyer=0.3
	}
	if(PleyerColid.position.x>=750){
		xPleyer2=0
	}
	else{
		xPleyer2=0.3
	}
	if(PleyerColid.position.y<=0){
		yPleyer=0
	}
	else{
		yPleyer=10
	}
	if(positionX<=290){
		moveX=10
	    img=ship2_anime
	}
	else if(positionX>=390){
		moveX=-10
		img=ship2
	}
	if(colid([530+100/2,200+100/2],[PleyerColid.position.x+100/2,PleyerColid.position.y+100/2],[30,30])||colid([positionX+100/2,positionY+100/2],[PleyerColid.position.x+100/2,PleyerColid.position.y+100/2],[30,30])){
		if(gameOver==false){
			alert("ви програли")
			gameOver=true
			location.reload()
		}
	}
	if(colid([650+100/2,200+100/2],[PleyerColid.position.x+100/2,PleyerColid.position.y+100/2],[30,35])){
		if(youChempion==false){
			alert("ви виграли")
			youChempion=true
			cycle=false
			stop=undefined
			let fon=document.createElement("canvas")
			let buttonLevel=document.createElement('a')
			let aButton=document.createElement('a')
			let buttonRestart=document.createElement('img')
			let buttonMenu=document.createElement("img")
			let Images=document.createElement("img")
			buttonLevel.innerHTML=">>>"
			buttonLevel.href="MyGame2.html"
			buttonLevel.id="button4"
			buttonLevel.className="buttonHref"
			fon.width=500
			fon.height=600
			fon.id="endgame"
			aButton.href="Menu.html"
			buttonMenu.src="image/MenuButton.png"
			buttonMenu.id="Button2"
			buttonRestart.src="image/RestartButton.png"
			buttonRestart.id="restart"
			Images.src="Image/ball.png"
			Images.id="pleyerImage"
			document.body.appendChild(fon)
			document.body.appendChild(buttonLevel)
			document.body.appendChild(aButton)
			aButton.appendChild(buttonMenu)
			document.body.appendChild(buttonRestart)
			document.body.appendChild(Images)
			buttonRestart.onmousedown=function(){
				location.reload()
			}
		}
	}
	draw()
	
}

function cycleGame(){
	if(cycle==true){
		game()
	}
	
}

setInterval(cycleGame,100)