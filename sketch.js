const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3;
var ball;
var ground;

function setup(){
     createCanvas(800,400);

     rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,380,200,10);
    box2 = new Box(505,350,10,70);
    box3 = new Box(695,350,10,70);
    ground = new Ground(400,390,800,10);
    ball = new Paper(100,350,30);
   
    Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
    background("black");

    ball.display();
    box1.display();
    box2.display();
    box3.display();
   ground.display();
    
}
function keyPressed(){
    
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30});

}
}