var car,obsticle;
function preload(){
  car1=loadImage("car1.png");
  obsticle1=loadImage("obstical2.png");
  track=loadImage("background.png");
  car2Img=loadAnimation("car2.png");
  blast=loadAnimation("blast.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(width/2-100,height-100,30,30);
  car.addImage(car1);
car.scale=0.05
car2 = createSprite(width/2+100,height-100,30,30);
  obstical = new Group();
  car2.addAnimation('car',car2Img)
  car2.addAnimation('blast',blast);
  car2.changeAnimation('car');
car2.scale=0.05
  addSprites();

  
}

function draw() 
{
   background(30);
   image(track, 0,-displayHeight*3,displayWidth, displayHeight*5);
   //camera.position.y=car.position.y
  if (keyIsDown(RIGHT_ARROW)) 
  {
    car.position.x = car.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    car.position.x= car.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    car.position.y = car.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  car.position.y = car.position.y + 5;
  }
  
  if (keyDown('d')) 
  {
    car2.position.x = car2.position.x +5;
  }

    if (keyDown('a')) 
  {
    car2.position.x= car2.position.x -5;
    
  }
 
    if (keyDown('w')) 
  {
    car2.position.y = car2.position.y - 5;
   
  }

  if (keyDown('s')) 
  {
  car2.position.y = car2.position.y + 5;
  }

  if(car.isTouching(car2)){
    car2.scale=0.2
 car2.changeAnimation('blast');
  } 





  drawSprites();
  camera.position.y = car.y;
  camera.position.y = car2.y;
  
}
 function addSprites() {
  for (var i = 0; i <12; i++) {
    var x, y;
      x = random(width/2+150, width/2-150);
      y = random(-height*4,height);
    
   sprite = createSprite(x, y);
    sprite.addImage(obsticle1);
    sprite.scale = 0.5;
    obstical.add(sprite);
    
  }
}



