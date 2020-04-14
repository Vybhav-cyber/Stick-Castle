const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(400,400);
       engine = Engine.create();
       world = engine.world;
       
       box1 = new Box(150, 300, 30, 80);
       box2 = new Box(240, 300, 30, 80);
       box3 = new Box(195, 300, 200, 20)

       ground = new Ground(100, 380, 500, 20);
}

function draw(){
    background("white");
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
}
