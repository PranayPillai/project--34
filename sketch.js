const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var superhero,superheroImage;
var monster,monsterImage;
var backGround,backGroundImage;

function preload() {
//preload the images here
  superheroImage = loadImage("images/Superhero-01.png");
  

  monsterImage = loadImage("images/Monster-01.png");
  
  

  backGroundImage = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
 
  // create sprites here
  ground = new Ground(3000,750,3000,20);
  rope = new Fly(hero.body,{x : 100 , y : 100});
  hero = new Hero(50,200,20);

}

function draw() {
  background("backGroundImage");
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.hero,{x : mouseX, y : mouseY});
}

