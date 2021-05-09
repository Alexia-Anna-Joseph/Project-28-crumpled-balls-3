
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var PAPER;
var ball;

var ground;
var launcherObject;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;

function preload()
{
	img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1400, 640);


	engine = Engine.create();
	world = engine.world;

   	paper = new BALL(75,300,5,10)
    ground = new GROUND(700,620,1400,20)
    side1 = new DUSTBIN (900,620,20,100)
    side2 = new DUSTBIN (1100,620,20,100)
    side3 = new DUSTBIN (1000,600,200,20)
    launcher=new launcherObject(paper.body,{x:300,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  imageMode(CENTER)
  image(img,1000,480,250,250)

  

  ground.display();
  
  paper.display();
  
  drawSprites();

  launcher.display();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(Paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcher.fly();
 
}



