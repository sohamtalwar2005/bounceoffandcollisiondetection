//creting the rectangles
var movingRect,fixedRect;
var movingRect2,fixedRect2;
function setup() {
  //creating the canvas
  createCanvas(800,800);
  //creating sprites and setting their colors
  movingRect = createSprite(100, 400, 80, 50);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(550,430,30,80); 
  fixedRect.shapeColor = "red";
  movingRect.velocityX = 10;
  movingRect.velocityY = 1;
  fixedRect.velocityX = -5;
  fixedRect.velocityY = -1;
  movingRect2 = createSprite(100, 400, 80, 50);
  movingRect2.shapeColor = "red";
  fixedRect2 = createSprite(550,430,30,80); 
  fixedRect2.shapeColor = "red";

}

function draw() {
  //setting the background color to white
  background(255,255,255);  
  movingRect2.y = World.mouseY;
  movingRect2.x = World.mouseX;
  //making the rectangle move on the position of the user's mouse
  bounceoff(movingRect,fixedRect);
  //creating a condtion for colliding the rectangles
    if(isTouching(movingRect2,fixedRect2)){
      movingRect2.shapeColor = "yellow";
      fixedRect2.shapeColor = "yellow";
    }
    else{
      movingRect2.shapeColor = "red";
      fixedRect2.shapeColor = "red";
    }
  //displaying the sprites
   drawSprites();
}
function isTouching(gameobject3,gameobject4){
  if(gameobject3.x - gameobject4.x < gameobject4.width/2 + gameobject3.width/2 
    && gameobject4.x - gameobject3.x < gameobject4.width/2 + gameobject3.width/2 
    &&gameobject3.y - gameobject4.y < gameobject4.height/2 + gameobject3.height/2 
    && gameobject4.y - gameobject3.y < gameobject4.height/2 + gameobject3.height/2
    ){
      return true;
    }
    else{
      return false;
    }
}
function bounceoff(gameobject1,gameobject2){
  if(gameobject1.x - gameobject2.x < gameobject2.width/2 + gameobject1.width/2 
    && gameobject2.x - gameobject1.x < gameobject2.width/2 + gameobject1.width/2 
    ){
    gameobject1.velocityX = gameobject1.velocityX*(-1); 
    gameobject2.velocityX = gameobject2.velocityX*(-1); 
  }
  if(gameobject1.y - gameobject2.y < gameobject2.height/2 + gameobject1.height/2 
    && gameobject2.y - gameobject1.y < gameobject2.height/2 + gameobject1.height/2)
    {
      gameobject1.velocityY = gameobject1.velocityY*(-1); 
    gameobject2.velocityY = gameobject2.velocityY*(-1);
    }


}