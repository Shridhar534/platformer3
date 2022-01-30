var bg1,bg2,bg3,bg4,box1,box2
var wall1,wall2,wall3,wall4
var collideGroup,g1,g2
var start
var hero,groundCheck
var ctrl,lol,z1,z2,z3

function preload(){
  stimg = loadImage("img/start.png")
  bgimg1 = loadImage("img/bg1.png")
  ctrlImg1 = loadImage("img/right.png")
  ctrlImg2 = loadImage("img/left.png")
  heroimg = loadImage("img/hero.png")
  ctrlImg3 = loadImage("img/jump.png")
}

function setup(){
  createCanvas(1800,700)
   
  bg1 = createSprite(1420,350)
  bg1.addImage("bg1",bgimg1)
  //bg1.scale=0.5

 
  hero = createSprite (780,400,50,50)
  hero.addImage("hero",heroimg)
  hero.scale=0.1
  
  groundCheck = createSprite(900,350,10,10)
  
  
  z1 = createSprite(715,480,40,40)
  z1.addImage("z1",ctrlImg1)
  z1.scale=0.7
  //right//
  z2 = createSprite(605,480,40,40)
  z2.addImage("z2",ctrlImg2)
  z2.scale=0.7

  z3=createSprite(1195,480,40,40)
  z3.addImage("z3",ctrlImg3)
  z3.scale=0.7


  lol = createSprite(1000,1000,50,50)

  start=createSprite(900,350)
  start.addImage("start",stimg)
  start.scale=0.2

  box1 = createSprite(205,345,650,800)
  box1.shapeColor="white"
  box2 = createSprite(1595,350,650,800)
  box2.shapeColor="white"

  collideGroup=createGroup()
  g1=createSprite(1020,510,1030,50)
  g2=createSprite(1678,510,125,50)

  wall1 = createSprite(522,354,20,900)
  wall2 = createSprite(1272,350,20,900)

}
function draw(){
background("white")

groundCheck.x=hero.x
groundCheck.y=hero.y+25

collideGroup.add(g1)
collideGroup.add(g2)

hero.collide(collideGroup)

hero.velocityY=hero.velocityY + 0.8

if(lol.isTouching(start)){
  start.x=5000
  bg1.velocityX = -0.4
  g2.velocityX = -0.4
  g1.velocityX = -0.4
}




lol.x=mouseX
lol.y=mouseY


if(keyDown("q")){
hero.x=mouseX
hero.y=mouseY
hero.velocityY=5
}

if(groundCheck.isTouching(collideGroup)){
f()
}

if(keyDown("p")){
  console.log(mouseX,mouseY)
  }

  countrol()
  drawSprites()
}
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//


function countrol(){
 if(lol.isTouching(z1)){
  hero.position.x=hero.position.x+5
 }

if(lol.isTouching(z2)){
  hero.position.x=hero.position.x-5
}

/*if(lol.isTouching(z3)){
  hero.velocityY=-6
}*/

  if(keyDown("right_Arrow")){
    lol.x=z1.x
    lol.y=z1.y
    hero.position.x=hero.position.x+5
  }

  if(keyDown("left_Arrow")){
    lol.x=z2.x
    lol.y=z2.y
    hero.position.x=hero.position.x-5
  }

  /*if(keyDown("up_Arrow")){
    lol.x=z3.x
    lol.y=z3.y
    hero.velocityY=-6
  }*/
//*****************************************************************************************************//

}

function f(){

  if(lol.isTouching(z3)){
    hero.velocityY=-8
  }

  if(keyDown("up_Arrow")){
    lol.x=z3.x
    lol.y=z3.y
    hero.velocityY=-8
  }
}