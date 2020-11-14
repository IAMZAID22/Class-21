var fixrec;
var movrec;
var gaob1,gaob2,gaob3,gaob4;

function setup() {
  createCanvas(1200,800);
  fixrec = createSprite(400, 100, 50, 80);
  movrec = createSprite(400, 800, 80, 30);

  fixrec.shapeColor = "green";
  movrec.shapeColor = "blue";

  gaob1 = createSprite(100, 100, 50, 50);
  gaob2 = createSprite(200, 100,50,50);
  gaob3 = createSprite(300, 100, 50, 50);
  gaob4 = createSprite(400,100, 50,50);

 movrec.velocityY =-3;
 fixrec.velocityY = 3;
}

function draw() {
  background(255,255,255);
  
 //movrec.x = World.mouseX;
 //movrec.y = World.mouseY;
 
 if (isTouching(movrec,gaob1)) {
  gaob1.shapeColor = "red";
  movrec.shapeColor = "red";
   
 }
else{
  gaob1.shapeColor = "yellow";
  movrec.shapeColor = "yellow";
}

if (isTouching(movrec,gaob2)) {
  gaob2.shapeColor = "red";
  movrec.shapeColor = "red";
   
 }
else{
  gaob2.shapeColor = "yellow";
  movrec.shapeColor = "yellow";
}

bounceOff(movrec,fixrec);


  drawSprites();
}

