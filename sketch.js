
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var PAPER;


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

   	paper = (75,300,5,10)
    ground = (700,620,1400,20)
    side1 =  (900,620,20,100)
    side2 =  (1100,620,20,100)
    side3 = (1000,600,200,20)
    launcher=(paper.body,{x:300,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  imageMode(CENTER)
  image(img,1000,480,250,250)

  

  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(Paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	
 
}



