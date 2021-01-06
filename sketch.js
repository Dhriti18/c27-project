
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(320,500,71);
bob5=new Bob(600,500,70);
bob4=new Bob(530,500,70);
bob3=new Bob(460,500,70);
bob2=new Bob(390,500,70);
bob1=new Bob(320,500,71);
roof1=new Roof(440,200,360,40);
String1=new Rope (roof1.body,bob1.body);
String2=new Rope (roof1.body,bob2.body);
String3=new Rope (roof1.body,bob3.body);
String4=new Rope (roof1.body,bob4.body);
String5=new Rope (roof1.body,bob5.body);

//rope1=new Rope (bob1.body,bob5.body);
//console.log(rope1);

//b1=new Roof(440,200,360,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  bob1.display();
  bob2.display();
  bob3.display();

  bob4.display();
  bob5.display();
  
  roof1.display();
  String1.display();
  String2.display();
  String3.display();
  String4.display();
  String5.display();
  //.display();
  drawSprites();
 
}



