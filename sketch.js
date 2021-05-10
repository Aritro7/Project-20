var bgImg
var tom, jerry;
var catImg1, catImg2, mouseImg1, mouseImg2, mouseImg3, catImg3, mouseImg4, catImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    catImg3 = loadAnimation("images/cat3.png");
    mouseImg4= loadAnimation("images/mouse4.png");
    catImg4 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800, 650);
    tom.addImage(catImg1);
    tom.scale = 0.25;

    jerry = createSprite(150, 650);
    jerry.addImage(mouseImg1);
    jerry.scale = 0.22;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2
        && jerry.x - tom.x < jerry.width/2 + tom.width/2
        && tom.y - jerry.y < tom.height/2 + jerry.height/2
        && jerry.y - tom.y < jerry.height/2 + tom.height/2) {
        tom.addAnimation("tomhappy", catImg4);
        tom.changeAnimation("tomhappy");
        jerry.addAnimation("jerryhappy", mouseImg4);
        jerry.changeAnimation("jerryhappy");
        tom.velocityX = 0;
        jerry.velocityX =0;
      }
      
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW) {
    jerry.addAnimation("mouseTeasing", mouseImg2);
    jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay = 25;
    tom.addAnimation("catTeasing", catImg2);
    tom.changeAnimation("catTeasing");
    tom.frameDelay = 25;
    tom.velocityX = -2;
}

}
