const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(220,130,50,50);
    box2=new Box(200,300,40,60);
    ground=new Ground(200,380,400,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
}