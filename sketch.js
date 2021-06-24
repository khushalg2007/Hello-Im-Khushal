const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    ball = new Ball(200,50,40,50);
    console.log(ball)
    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:200, y:50});
}

function draw(){
    background("black")
    console.log("Here")
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //pig1.score();
    //og1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //pig3.score();
   // log3.display();

    box5.display();
   // log4.display();
   // log5.display();

    ball.display();
   // platform.display();
    //log6.display();
    rope.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


