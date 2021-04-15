var garden,gardenImg,cat,cat_sitting,cat_running, mouse_img, mouse_teasing;
var cat_stop, mouse_stop;
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    cat_sitting = loadAnimation("images/cat1.png");
    cat_stop = loadAnimation("images/cat4.png");
    cat_running = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
    mouse_img   = loadAnimation("images/mouse1.png");
    mouse_teasing = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png")
    mouse_stop = loadAnimation("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,700);
    garden.addImage(gardenImg);

    cat = createSprite(880,580,20,20);
    cat.addAnimation("catimg",cat_sitting);
    cat.scale = 0.1;

    mouse = createSprite(180,580,20,20);
    mouse.addAnimation("mouseimg",mouse_img);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //cat.setCollider("rectangle",0,0,250,250,0)
    cat.debug = 'true';
    mouse.debug = 'true';
    //Write condition here to evalute if tom and jerry collide
if((cat.x - mouse.x)-100 <= (cat.width- mouse.width)/2){
cat.addAnimation("catstop",cat_stop);
cat.changeAnimation("catstop");
cat.velocityX = 0;

mouse.addAnimation("mousestop",mouse_stop);
 mouse.changeAnimation("mousestop");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left_Arrow")){
    cat.addAnimation("catRunning",cat_running);
    cat.changeAnimation("catRunning");
    cat.velocityX = -2;

    mouse.addAnimation("mouseteasing",mouse_teasing);
    mouse.changeAnimation("mouseteasing");
}

}
