
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var player, player_running, player_dead;
var bg1, bg2, bg3, bg4, bg5;
var zombie1, zombie2, zombie3;
var invisibleGround;

function preload(){
	player_running = loadAnimation("images/walk.png", "images/idle.png");
	player_dead = loadImage("images/hurt.png");

	bg1 = loadImage("images/bg1.jpg");
	bg2 = loadImage("images/bg2.jpg");
	bg3 = loadImage("images/bg3.jpg");
	bg4 = loadImage("images/bg4.jpg");
	bg5 = loadImage("images/bg5.jpg");

	zombie1 = loadImage("images/zombie1.png");
	zombie2 = loadImage("images/zombie2.png");
	zombie3 = loadImage("images/zombie3.png");

}

function setup(){
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	player = createSprite(50,180,20,50);
  
 	player.addAnimation("running", player_running);
  	player.scale = 0.5;

	invisibleGround = createSprite(400,390,800,10);
	invisibleGround.visible = false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg1);
  
  if(keyDown("space") && player.y >= 309) {
	player.velocityY = -12;
  }

  player.velocityY = player.velocityY + 0.8;

  player.collide(invisibleGround);
  spawnZombies();
  drawSprites();
 
}

function spawnZombies() {
	if(frameCount % 100 === 0) {
	  var zombie = createSprite(800,355,10,40);
	  //obstacle.debug = true;
	  zombie.velocityX = -6;
	  
	  //generate random obstacles
	  var rand = Math.round(random(1,3));
	  switch(rand) {
		case 1: zombie.addImage(zombie1);
				break;
		case 2: zombie.addImage(zombie2);
				break;
		case 3: zombie.addImage(zombie3);
                break;
		default: break;
	  }
	  zombie.scale = 0.2;
	}
}
