
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball;
var ground,ground2;
var dustbin1,dustbin2,dustbin3,dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(width/2, height-20, width,15);
	ground2 = new Ground(width/2, height-40, width,15);

	dustbin1 = new dustbin(850,410, 15,120 );
	dustbin2 = new dustbin(965,410, 15,120 );

	dustbin3 = createSprite(910,395,15,15);
	dustbin3.addImage("dustbin",dustbinImg) 
	dustbin3.scale = 0.52 ;

	paper_ball = new Ball(100,400,35);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();

  ground.display();

  paper_ball.display();

  drawSprites();

  text(mouseX + ","+mouseY,mouseX,mouseY);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:230,y:-230});
	}
}

