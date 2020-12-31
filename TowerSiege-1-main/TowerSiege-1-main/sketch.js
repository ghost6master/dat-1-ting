const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot;
var engine, world;
var platform1,platform2;
var Hex;

var gameState = "onSling";



function preload() {

}

function setup(){
    var canvas = createCanvas(1100,400);
    engine = Engine.create();
    world = engine.world;

    Hex = new hex(200,50);
   
    platform1 = new plat(900,220,200,14);
    platform2 = new plat(520,195,200,14);
    

  
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(Hex.body,{x:200, y:200});
}

function draw(){
        background("black");
    
    
    Engine.update(engine);
    
    Hex.display();
platform1.display();
platform2.display();
slingshot.display();


}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(Hex.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

