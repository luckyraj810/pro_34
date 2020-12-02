
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var wall,bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   wall=new Ground(500,150,500,50);
   bob1=new bob(290,550,100);
   
   bob2=new bob(390,550,100);
   bob3=new bob(490,550,100);
   bob4=new bob(590,550,100);
   bob5=new bob(690,550,100);
   r1=new Rope(bob1.body,{x:290,y:130});
   r2=new Rope(bob2.body,{x:390,y:130});
   r3=new Rope(bob3.body,{x:490,y:130});
   r4=new Rope(bob4.body,{x:590,y:130});
   r5=new Rope(bob5.body,{x:690,y:130});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

 // wall.display();
  fill("cyan");
  bob1.display();
  fill("orange")
  bob2.display();
  fill("white");
  bob3.display();
  fill("green");
  bob4.display();
  fill("pink");
  bob5.display();
 
}
function mouseDragged (){


  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
//Matter.Body.setPosition(bob1.body,{x:200,y:150});
//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:200,y:150});   



}

