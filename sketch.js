
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  // create monkey sprite
  monkey = createSprite(80,500)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.18;
  
  // create a ground
  ground = createSprite(600,550,1200,5)
  ground.velocityX = -4;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("pink");
  
  text("Survival Time : " + score, 400,100)
  score = Math.ceil(frameCount/getFrameRate());
    
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(ground.x<0){
    ground.x = 600;
  }
  food();
  obstacles();
  monkey.collide(ground);
  drawSprites();

  
}

function food(){
  if(frameCount%80 === 0){
    banana = createSprite(600,500,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(300,500))
    banana.velocityX = -4;
    banana.lifetime = 600/4;
    FoodGroup.add(banana); 
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(600,510,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}




