
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bob1=new Bob(200,500,40)
  bob2=new Bob(280,500,40)
  bob3=new Bob(360,500,40)
  bob4=new Bob(440,500,40)
  bob5=new Bob(520,500,40)
  roof1=new Roof(380,200,450,30);
  rope1=new Rope(bob1.body,{x:240,y:200})
  rope2=new Rope(bob2.body,{x:320,y:200})
  rope3=new Rope(bob3.body,{x:400,y:200})
  rope4=new Rope(bob4.body,{x:480,y:200})
  rope5=new Rope(bob5.body,{x:560,y:200})

}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 

  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:70})
  }
}


