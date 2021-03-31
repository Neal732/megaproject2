const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var engine, world;
var fireMan;
var ground;
var f1, f2, f3, f4, f5;
var fireImg;
var water = [];
var waterImg;
var waterGroup;
var xp = 650;
var score = 0;
var time = 60;
var gameState = 1;
var button, buttonImg;
maxDrops = 1000;

function preload(){
  backgroundImg = loadImage("bgimg.png")
  waterImg = loadImage("water.png")
  fireImg = loadImage("fire.png")
  buttonImg = loadImage('button.png')
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  waterGroup = createGroup()
  f1 = createSprite(105,255,65,75)
  f1.addImage(fireImg)
  f1.scale=0.15
  f2 = createSprite(230,60,90,90)
  f2.addImage(fireImg)
  f2.scale=0.2
  f3 = createSprite(360,175,80,80)
  f3.addImage(fireImg)
  f3.scale=0.12
  f4 = createSprite(490,150,50,50)
  f4.addImage(fireImg)
  f4.scale=0.1
  f5 = createSprite(590,240,50,50)
  f5.addImage(fireImg)
  f5.scale=0.1
  fireMan = new ff(700,290,200,200)
  button = createSprite(405,245)
  button.addImage(buttonImg)
  button.visible = false
  button.scale = 0.25
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  if(gameState === 1){  
    f1.visible = true
    f1.width = 65
    f1.hight = 75
    f2.visible = true
    f2.width = 90
    f2.hight = 90
    f3.visible = true
    f3.width = 80
    f3.hight = 80
    f4.visible = true
    f4.width = 50
    f4.hight = 50
    f5.visible = true
    f5.width = 50
    f5.hight = 50
    button.visible = false
    fill("Red")
    textSize(21)
    text("Fires destoryed: " + score + " of 5", 575, 20)
    text("Time Left: " + time, 10, 20)

    if(frameCount%25  === 0){
      time = time- 1
    }

    if(keyDown("left_arrow")){
      xp = xp-5
      fireMan.body.position.x = fireMan.body.position.x-5
    }

    if(keyDown("right_arrow")){
      xp = xp+5
      fireMan.body.position.x = fireMan.body.position.x+5
    }

    if(keyDown("space")){
      dogWater();
    }

    
    if(waterGroup.isTouching(f1)){
      if(f1.scale>0){
        f1.scale = f1.scale-0.0005
      }
      if(f1.scale<=0){
        f1.destroy();
        score++
      }
    }

    if(waterGroup.isTouching(f2)){
      if(f2.scale>0){
        f2.scale = f2.scale-0.0005
      }
      if(f2.scale<=0){
        f2.destroy();
        score++
      }
    }

    if(waterGroup.isTouching(f3)){
      if(f3.scale>0){
        f3.scale = f3.scale-0.0005
      }
      if(f3.scale<=0){
        f3.destroy();
        score++
      }
    }

    if(waterGroup.isTouching(f4)){
      if(f4.scale>0){
        f4.scale = f4.scale-0.0005
      }
      if(f4.scale<=0){
        f4.destroy();
        score++
      }
    }

    if(waterGroup.isTouching(f5)){
      if(f5.scale>0){
        f5.scale = f5.scale-0.0005
      }
      if(f5.scale<=0){
        f5.destroy();
        score++
      }
    }

    if(score === 5 && time>0){
      gameState = 2
    }

    if(score < 5 && time === 0){
      gameState = 3
    }

    fireMan.display()
  }   
  
  if(gameState === 2){
    score = 0;
    time = 60;
    background("green");
    f1.visible = false
    f2.visible = false
    f3.visible = false
    f4.visible = false
    f5.visible = false
    button.visible = true
    fill("pink")
    textSize(50)
    text("You Won", 300, 200)

    if(mousePressedOver(button)){
      gameState = 1
    }
  }

  if(gameState === 3){
    score = 0;
    time = 60;
    background("red");
    f1.visible = false
    f2.visible = false
    f3.visible = false
    f4.visible = false
    f5.visible = false
    button.visible = true
    fill("pink")
    textSize(50)
    text("You Lost", 300, 200)
    
    if(mousePressedOver(button)){
      gameState = 1
    }
  }
  drawSprites();
}

function dogWater(){
  water = createSprite(xp, 280, 15, 15)
  water.addImage(waterImg)
  water.scale = 0.05
  waterGroup.add(water)
  water.velocityX = -5
  water.velocityY = -3
}