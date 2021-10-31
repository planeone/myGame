


let magicMotus=true



const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

let randomLive=Math.random()


document.onkeypress=function(event){
	if(event.key=="w"){
		PleyerColid.constraintImpulse.y-=0.3
	}
	if(event.key=="d"){
		PleyerColid.constraintImpulse.x+=0.3
	}
	if(event.key=="a"){
		PleyerColid.constraintImpulse.x-=0.3
	}
	if(event.key=="z"){
		PleyerColid.constraintImpulse.y+=0.3
	}
}

let buttonStan=true
let game=true
let magicDraw=false
let timeDragon=0

let magicSize=1
let pleyerLive=200

let dragonLive=200

let dragonReg=0

let timerMagic=0
let timerMagicMove=0

let timerMagic2=0
let timerMagicMove2=0

let timerMagic3=0
let timerMagicMove3=0

let timerMagic4=0
let timerMagicMove4=0

let timerMagic5=0
let timerMagicMove5=0

const stopButton=document.querySelector("#stopButton")
const motus=document.querySelector("#motus")
const fier=document.querySelector("#fier")
const portal=document.querySelector("#portal")
const mech=document.querySelector("#mech")
const pleyerMagic=document.querySelector("#pleyerMagic")

stopButton.onmousedown=function(){
     if(buttonStan==true){
        stopButton.src="image/myButton2.png"
		game=false
        buttonStan=false		
     }
     else if(buttonStan==false){
		 stopButton.src="image/myButton.png"
		 game=true
		 buttonStan=true
     }	 
}
const img=new Image()
const img2=new Image()
const img3=new Image()
const img4=new Image()
const img6=new Image()
const img7=new Image()
const img8=new Image()
const img9=new Image()
const img10=new Image()
const img11=new Image()
const img12=new Image()
const img13=new Image()
const img14=new Image()
const img15=new Image()
const img16=new Image()
const img17=new Image()

img.src="image/window.png"
img2.src="image/ball2.png"
img4.src="image/portal.png"
img6.src="image/ship3.png"
img7.src="image/dragon.png"
img8.src="image/fier.png"
img9.src="image/magic2.png"
img10.src="image/dragon2.png"
img11.src='image/clock.png'
img12.src="image/ball4.png"
img13.src="image/ball3.png"
img14.src="image/magicVers2.png"
img15.src="image/magicVers.png"
img16.src="image/dragonFier.png"
img17.src="image/DarckRoyal.png"
img3.src="image/block.png"

let gameOver=false

let dragonX=200
let dragonY=200

let poleX=660
let poleY=390

let imgDragon=img7
let animeDragon=0

let botSila=50

let magicX=-100
let magicY=-100
let magicX2=-100
let magicY2=-100
let magicX3=-100
let magicY3=-100
let magicX4=-100
let magicY4=-100
let magicX5=-100
let magicY5=-100
let magicX6=-150
let magicY6=-150

let mapImage=img2
let Golem=img14

let timeGolem=0

let dragonMagicX=0
let dragonMagicY=0

let dragonMagicX2=0
let dragonMagicY2=0

let dragonMagicX3=0
let dragonMagicY3=0

let imgBot=imgDragon

if(randomLive<=0.5){
	imgBot=imgDragon
	dragonLive=200
	botSila=50
}else{
	imgBot=img17
    dragonLive=300
    botSila=70	
}

motus.onmousedown=function(){
	 if(magicMotus==true && timerMagic==0){
		 magicX=PleyerColid.position.x-50
		 magicY=PleyerColid.position.y-50
		 magicMotus=false
		 timerMagicMove=1
		 magicX3=PleyerColid.position.x-25
		 magicY3=PleyerColid.position.y-20
		 motus.src="image/map8.png"
	 }
}

fier.onmousedown=function(){
	if(timerMagic2==0){
		magicX2=PleyerColid.position.x-50
		magicY2=PleyerColid.position.y-50
		timerMagicMove2=1
		magicX4=PleyerColid.position.x-25
		magicY4=PleyerColid.position.y-20
		fier.src="image/map9.png"
    }		
}

portal.onmousedown=function(){
	if(timerMagic3==0){
		portal.src="image/map10.png"
		Matter.Body.setPosition(PleyerColid,{x:50,y:300})
		timerMagicMove3=1
	}
}

mech.onmousedown=function(){
	if(timerMagic4==0){
		mapImage=img12
		timerMagicMove4=1
		mech.src="image/map11.png"
    }	 
}

pleyerMagic.onmousedown=function(){
	if(timerMagic5==0){
		timerMagicMove5=1
		Golem=img14
		magicX6=PleyerColid.position.x-70
		magicY6=PleyerColid.position.y-70
		pleyerMagic.src="image/map12.png"
	}
}

function draw(){
	ctx.clearRect(0,0,1150,600)
	ctx.fillStyle="#444"
	ctx.fillRect(0,0,800,600)
    ctx.drawImage(img,500,100,100,100)
    ctx.drawImage(img,300,200,100,100)
    ctx.drawImage(img3,200,50,50,50)
    ctx.drawImage(img3,600,350,50,50)
    ctx.drawImage(img3,100,400,50,50)
	ctx.fillStyle="#aaa"
	ctx.fillRect(9,0,25,600)
	ctx.fillRect(10,0,800,25)
	ctx.fillRect(785,0,25,600)
	ctx.fillRect(10,175,200,50)
	ctx.fillRect(0,500,800,100)
	ctx.drawImage(img4,680,400,100,100)
	ctx.fillStyle="#00aaff50"
	ctx.fillRect(poleX,poleY,120,110)
	ctx.drawImage(img9,magicX,magicY,100,100)
	ctx.drawImage(img8,magicX2,magicY2,100,100)
	ctx.drawImage(img11,magicX3,magicY3,50,50)
	ctx.drawImage(img11,magicX4,magicY4,50,50)
	ctx.drawImage(Golem,magicX6,magicY6,150,150)
	ctx.drawImage(mapImage,PleyerColid.position.x-50,PleyerColid.position.y-50,100,100)
	ctx.drawImage(imgBot,dragonX,dragonY,100,100)
	ctx.drawImage(img16,dragonMagicX,dragonMagicY,50,50)
	ctx.drawImage(img16,dragonMagicX2,dragonMagicY2,50,50)
	ctx.drawImage(img16,dragonMagicX3,dragonMagicY3,50,50)
	ctx.fillStyle="#000"
	ctx.fillRect(190,50,200,25)
	ctx.fillRect(dragonX+30,dragonY-15,50,10)
	ctx.fillStyle="green"
	ctx.fillRect(190,50,pleyerLive,25)
	ctx.fillStyle="red"
	ctx.fillRect(dragonX+30,dragonY-15,dragonLive-150,10)
}

function random(x){
	return Math.random()*x
}

function colid(object1,object2){
   return Math.sqrt((object1[0]-object2[0])**2+(object1[1]-object2[1])**2)<=35+35	
}
function menu(){
   const menu=document.createElement("canvas")
   const img=document.createElement("img")
   const a=document.createElement("a")
   const a2=document.createElement("a")
   const img2=document.createElement("img")
   const img3=document.createElement("img")
   const a3=document.createElement("a")
   menu.id="menuCanvas"
   menu.height='500'
   menu.width="400"
   img.id="menuPleyer"
   img.width="200"
   img.height="200"
   img.src="image/ball.png"
   a.id="menuButton"
   a.innerHTML=">>>"
   if(randomLive<=0.5){
	   a.href="MyGame2.html"
   }else{
	   a.href="MyGame3.html"
   }
   a2.href="Menu.html"
   img2.id="menuButton2"
   img2.src="image/MenuButton.png"
   img3.id="menuButton3"
   img3.src="image/RestartButton.png"
   a3.href="MyGame2.html"
   document.body.appendChild(menu)
   document.body.appendChild(img)
   document.body.appendChild(a)
   document.body.appendChild(a2)
   document.body.appendChild(a3)
   a2.appendChild(img2)
   a3.appendChild(img3)   
}

img3.onload=draw

function cycle(){
	timerMagic+=timerMagicMove
	timerMagic2+=timerMagicMove2
	timerMagic3+=timerMagicMove3
	timerMagic4+=timerMagicMove4
	timerMagic5+=timerMagicMove5
	timeDragon+=1
	timeGolem+=1
	dragonLive+=dragonReg
	if(randomLive<=0.5){
		imgBot=imgDragon
	}
	if(dragonLive>=200 || dragonLive<=150){
		dragonReg=0
	}else{
		dragonReg=0.2
	}
	if(animeDragon==0){
       	imgDragon=img7	
	}
	else{
		imgDragon=img10
	}
	animeDragon+=1
	if(animeDragon>1){
		animeDragon=0
	}
	if((colid([PleyerColid.position.x,PleyerColid.position.y],[dragonX,dragonY]))&&(timerMagic4<20||timerMagic4>120)){
		pleyerLive-=botSila
	}
	if(colid([PleyerColid.position.x,PleyerColid.position.y],[dragonMagicX,dragonMagicY])||colid([PleyerColid.position.x,PleyerColid.position.y],[dragonMagicX2,dragonMagicY2])||colid([PleyerColid.position.x,PleyerColid.position.y],[dragonMagicX3,dragonMagicY3])){
		pleyerLive-=10
	}
	if(colid([PleyerColid.position.x,PleyerColid.position.y],[dragonX,dragonY]) && timerMagic4>20 && timerMagic4<120){
        dragonLive-=0.5 		
	}
	if(timerMagic>50){
		magicX3=-100
		magicY3=-100
	}
	if(colid([dragonX,dragonY],[magicX,magicY]) && timerMagic>50){
		dragonLive-=1
	}
	if(timerMagic2>70){
		magicX4=-100
		magicY4=-100
	}
	if(colid([dragonX,dragonY],[magicX2,magicY2]) && timerMagic2>70){
		dragonLive-=5
	}
	if(timerMagic>=120){
		magicX=-100
		magicY=-100
	}
	if(timerMagic2>=150){
		magicX2=-100
		magicY2=-100
	}
	if(timerMagic>350){
        timerMagic=0
        timerMagicMove=0
        magicMotus=true
        motus.src="image/map7.png"		
	}
	if(timerMagic2>450){
        timerMagic2=0
        timerMagicMove2=0
        fier.src="image/map1.png"		
	}
	if(timerMagic3>50){
        timerMagic3=0
        timerMagicMove3=0
        portal.src="image/map6.png"		
	}
	if(timerMagic4>20){
		mapImage=img13
	}
	if(timerMagic4>120){
		mapImage=img2
	}
	if(timerMagic4>200){
		timerMagic4=0
		timerMagicMove4=0
		mech.src="image/map2.png"
	}
	if(timerMagic5>100 && timerMagic5<160){
		Golem=img15
		if(colid([dragonX,dragonY],[magicX6,magicY6])){
			dragonLive-=3
		}
		if(timeGolem>=6){
			magicX6=200+random(400)
			magicY6=200+random(200)
			timeGolem=0
		}
	}
	if(timerMagic5>160){
		magicX6=-150
		magicY6=-150
	}
	if(timerMagic5>500){
		timerMagic5=0
		timerMagicMove5=0
		pleyerMagic.src="image/map4.png"
		
	}
	if(dragonLive-150<=0){
		dragonLive=150
		menu()
		alert("ви виграли")
		clearInterval(cycleGame)
	}
	if((colid([PleyerColid.position.x,PleyerColid.position.y],[poleX,poleY]))||(PleyerColid.position.x>1150 || PleyerColid.position.y>700)||(pleyerLive<=0)){
		if(gameOver==false){
			alert('ви програли')
			gameOver=true
			PleyerColid.position.x=1170
			PleyerColid.position.y=700
		}
		else{
			location.reload()
			gameOver=false
        }			
	}
	if(timeDragon>=6){
		dragonX=200+random(400)
		dragonY=200+random(200)
		dragonMagicX=200+random(400)
		dragonMagicY=200+random(200)
		dragonMagicX2=200+random(400)
		dragonMagicY2=200+random(200)
		dragonMagicX3=200+random(400)
		dragonMagicY3=200+random(200)
		timeDragon=0
	}
	draw()
}
const cycleGame=setInterval(function(){
    if(game==true){
		cycle()
	}		
},100)