const Engine = Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bg1, bg2, bg1Img, bg2img, tree, treeGIF;
var boy;
var snowman, snowmanImg;
var santa, santaImg;
var snowBody=[];
var birds;
var body1, visual1, visual2, body3, visual3;

function preload(){
    snowmanImg = loadImage("assets/snowman.png");
    bg = loadImage("bg.png");
    birds = loadImage("assets/birds.png");
    santaImg = loadImage("santa.gif");
    visual1 = loadImage("visual1.gif");
    visual2 = loadImage("visual2.gif");
    visual3 = loadImage("visual3.gif");
}

function setup() {
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    //snowBody=[];
    var maxSnowCount=200;
    for(var i=0; i<maxSnowCount; i++){
       snowBody.push(new Snow(random(1,800),random(-100,600) ,PI/1))
    } 
    snowman = createSprite(200, 430, 200, 200);
    snowman.addImage("snowmanImage", snowmanImg);
    snowman.scale = 0.3;
    
    santa = createSprite(-50, 180, 400, 400);
    santa.addImage("santaImage", santaImg);
    santa.scale = 0.5;

    boy = new Boy();
    body1 = createSprite(540, 450, 200, 200);
    body1.addImage("bodyImg", visual1);
    body1.scale=0.3;
  }

  function draw() {
    background(bg);
    push(0);
    fill("#000000");
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();
    var maxSnowCount=200;
    for(var i = 0; i<maxSnowCount; i++){ 
        snowBody[i].display(); 
    }
    if(frameCount%2===0){
       body1.x = body1.x+ 0.6;
    //    body1.y=+ 0.4;
    }
    if(frameCount%2===0){
      santa.x = santa.x+5;
      if(santa.x > 1000){
        santa.x = -100;
      }
    }
    //console.log(snowBody);
    //keyPressed();
    boy.display();
    image(visual2, 60, 540, 210, 170);
    //image(boy, 380, 600, 320, 270);
    image(birds, 750, 300, 150, 150);
    Engine.update(engine);
    drawSprites();
   }
   
//    function keyPressed(){
//      if(keyCode===37){
//        boy.changeAnimation("boyImg.", boyImg2);
//      }
//      if(keyCode===39){
//        boy.changeAnimation("boyImg", boyImg1);
//      }
//    }