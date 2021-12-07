const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground1,ground2,ground3,ground4,ground5,ground6;
var bg, bgs;
var player;
var grounds = [];

function preload() {
  bg=loadImage("wall.jpg");

}
function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  
  document.addEventListener('mousemove', (event) => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
  bgs = createSprite(350,200);
  bgs.addImage(bg);
  bgs.scale=1.3;
  bgs.velocityX=-2;

  ground1=new Ground(width/2,430,width+30,140);
  grounds.push(ground1);
  ground2=new Baseground(500,290,360,30);
  grounds.push(ground2);
  ground3=new Baseground(200,227,45,30);
  grounds.push(ground3);
  ground4=new Baseground(490,200,40,60);
  //Body.setVelocity(ground1.body,{x:-2,y:0});

  player = new Player(200,250);

}

function draw() {
  background("black");
  Engine.update(engine);

  if(bgs.x<bgs.width/2){
    bgs.x=350;
  }
  var pos=player.body.position;
  
  if(keyDown(RIGHT_ARROW)){
    Body.setPosition(player.body,{x: pos.x+5,y: pos.y});
   }
   if(keyDown(LEFT_ARROW)){
    Body.setPosition(player.body,{x: pos.x-5,y: pos.y});
   }
   if(keyWentDown(UP_ARROW)){
    Body.applyForce(player.body,{x: pos.x,y: pos.y},{x:0,y:-0.1});
   }

  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  //ground5.display();
  //ground6.display();
  //ground7.display();


  player.display();

}

