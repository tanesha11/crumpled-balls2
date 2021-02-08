
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin1IMG;
var paper,paperIMG;
var ground;


function preload()
{
    //dustbin1IMG=loadImage('images/dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(100,630,70);
	
	dustbin1 = new Dustbin(600,638,150,20);
	dustbin2 = new Dustbin(523,605,20,90);
	dustbin3 = new Dustbin(673,605,20,90);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
image(dustbin1.image,500,472,200,180);
//image(paper.image,85,550,85,125);
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:188,y:-188});
	}
  }



