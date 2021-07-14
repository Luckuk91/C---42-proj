var iss,issImage;
var spacecraft, spacecraftImage,spacecraftLeftimage, spacecraftRightimage,
spacecraftBothimage;

var hasdock = false;


function preload (){
  issImage = loadImage("imeges/iss.png");
spacecraftImage = loadImage("imeges/spacecraft1.png");
spacecraftLeftimage = loadImage("imeges/spacecraft2.png");
spacecraftRightimage = loadImage("imeges/spacecraft3.png");
spacecraftBothimage = loadImage("imeges/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(200, 150, 50, 50);
  iss.addImage(issImage);
  iss.scale = 0.4;
  spacecraft = createSprite(200,300,50,50);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.15;
}

function draw() {
  background(0);
  
  if(!hasdock){
    
  
  
  
  
  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraftBothimage);
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x  = spacecraft.x -1;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.x  = spacecraft.x +1;
  }
  
  }


  if(spacecraft.y<=iss.y+20 && spacecraft.x<=iss.x-10){
    hasdock = 2
    textSize(25);
    text("dockingSuccesful", 200, 200);
  }

  
  drawSprites();
}