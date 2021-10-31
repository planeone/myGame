const engine=Matter.Engine.create()
const render=Matter.Render.create({
	element:document.body,
	engine:engine
})

const platform=Matter.Bodies.rectangle(400,550,800,100,{isStatic:true})
const plane1=Matter.Bodies.rectangle(0,300,50,600,{isStatic:true})
const plane2=Matter.Bodies.rectangle(800,300,50,600,{isStatic:true})
const plane3=Matter.Bodies.rectangle(400,0,800,50,{isStatic:true})
const platform2=Matter.Bodies.rectangle(100,200,200,50,{isStatic:true})
const PleyerColid=Matter.Bodies.circle(50,0,50)

engine.world.gravity.y=0

Matter.World.add(engine.world,[platform,platform2,plane1,plane2,plane3,PleyerColid])


Matter.Engine.run(engine)
Matter.Render.run(render)