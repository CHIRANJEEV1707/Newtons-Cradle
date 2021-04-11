const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var engine, world;
var slingShot;

function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse
    }
    mouseConstraint=MouseConstraint.create(engine,options);
    World.add(world,mouseConstraint)

    pendulum1=new Pendulum(100,100,"orange");
    pendulum2=new Pendulum(150,100,"orange");
    pendulum3=new Pendulum(200,100,"orange");

    slingShot1=new SlingShot(pendulum1.body,{x:200, y:100});
    slingShot2=new SlingShot(pendulum2.body,{x:250, y:100});
    slingshot3=new SlingShot(pendulum3.body,{x:300, y:100})
}

function draw(){
    Engine.update(engine);
    background("black")
    slingShot1.display();    
    pendulum1.display();
    slingShot2.display();
    pendulum2.display();
    pendulum3.display();
    slingshot3.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}