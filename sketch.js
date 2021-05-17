
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var cground, cpaper;
var binImg, bin;
var left, right, middle;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	cground = new Ground();

	cpaper = new Paper();


  
  left = new Dustbin(940, height-100, 20, 150);
  right = new Dustbin(1010, height-100, 20, 150);
	middle = new Dustbin(1000, height-60,  100, 20);
	

  
}


function draw() {
  background("white");
  Engine.update(engine);
  
  cground.display();
  cpaper.display();
  left.display();
  middle.display();
  right.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(cpaper.body, cpaper.body.position, {x:40, y: -36})
   }


}

