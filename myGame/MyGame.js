let xPleyer=0.3
let xPleyer2=0.3
let yPleyer=10

const engine=Matter.Engine.create()
const render=Matter.Render.create({
	element:document.body,
	engine:engine,
})

const plane=Matter.Bodies.rectangle(400,550,800,50,{isStatic:true})
const PleyerColid=Matter.Bodies.circle(100,491,50)
const platform=Matter.Bodies.rectangle(700-100,500,600,400,{isStatic:true})
const plane2=Matter.Bodies.rectangle(0,500,50,1000,{isStatic:true})
const plane3=Matter.Bodies.rectangle(800,500,50,1000,{isStatic:true})
const plane4=Matter.Bodies.rectangle(400,0,800,50,{isStatic:true})

Matter.World.add(engine.world,[plane,PleyerColid,platform,plane2,plane3,plane4])

Matter.Engine.run(engine)
Matter.Render.run(render)
