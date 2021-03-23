//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to create the sprite objects
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26;
var hero;
var monster;
var rope;
var ground;

//to preload the image
function preload() {

  bg = loadImage("gamingbackground2.png");

}

function setup() {

  //to create the canvas
  createCanvas(3000, 700);

  //to create the engine and world
  engine = Engine.create();
  world = engine.world;

  //to create the game objects
  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);

  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1050,550,300);
 
	box1 = new Box(650, 550, 50, 50);
	box2 = new Box(650, 500, 50, 50);
	box3 = new Box(650, 450, 50, 50);
	box4 = new Box(650, 400, 50, 50);
	box5 = new Box(650, 350, 50, 50);
	box6 = new Box(650, 300, 50, 50);
  box7 = new Box(650, 250, 50, 50);
  
	box8 = new Box(720, 550, 50, 50);
	box9 = new Box(720, 500, 50, 50);
	box10 = new Box(720, 450, 50, 50);
	box11 = new Box(720, 400, 50, 50);
	box12 = new Box(720, 350, 50, 50);
  box13 = new Box(720, 300, 50, 50);
  
	box14 = new Box(790, 550, 50, 50);
	box15 = new Box(790, 500, 50, 50);
	box16 = new Box(790, 450, 50, 50);
	box17 = new Box(790, 400, 50, 50);
  box18 = new Box(790, 350, 50, 50);
  box19 = new Box(790, 300, 50, 50);
  box20 = new Box(790, 250, 50, 50);
  box21 = new Box(790, 200, 50, 50);

  box22 = new Box(860, 550, 50, 50);
	box23 = new Box(860, 500, 50, 50);
	box24 = new Box(860, 450, 50, 50);
	box25 = new Box(860, 400, 50, 50);
  box26 = new Box(860, 350, 50, 50);

}

function draw() {

  //to give the background
  background(bg);

  //to update the engine
  Engine.update(engine);

  //to display the game objects
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();

  rope.display();

  monster.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});

}