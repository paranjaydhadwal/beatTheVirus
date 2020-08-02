var backgroundImg,player;
var invisibleGround;
var gameState=0;
var virus;
var virusImg1;
var virusImg2;
var virusImg3;
var virusImg4;
var game;
var houseImg;
//var gameOverImg;
var restartImg;
var running;
//var winImg;
var jump;
var veg;
//var winSprite;
var time=5;
function preload(){
    backgroundImg=loadImage('images/Background.png');
    virusImg1=loadImage('images/Virus1.png');
    virusImg2=loadImage('images/Virus2.png');
    virusImg3=loadImage('images/Virus3.png');
    virusImg4=loadImage('images/Virus4.png');
    houseImg=loadImage('images/Rename.png');
    gameOverImg=loadImage('images/GameOver.jpg');
    restartImg=loadImage('images/Restart.png');
    collided=loadAnimation('images/collided.png');
    winImg=loadImage('images/win.png');
    jump=loadSound('jump.mp3');
    santizer=loadImage('images/Sanitizer.png');
    mask1=loadImage('images/Mask.png');
    veg=loadImage('images/vegetables.png');
    running=loadAnimation('images/running1.png','images/running2.png','images/running3.png','images/running4.png','images/running5.png','images/running6.png')
}
function setup(){
     createCanvas(windowWidth,windowHeight);
     player=new Player();
     invisibleGround=createSprite(450,windowHeight-60,windowWidth*15,20);
     invisibleGround.visible=false;
     game=new Game();
    }


function draw(){
    background("white");
    image(backgroundImg,0,0,windowWidth*8,windowHeight);
   if(gameState===0){
        game.start();
   }
   //console.log(player.sprite.position.y);
   textSize(150);
  // text(mouseY,camera.position.x,camera.position.y);
   if(gameState===1){
    
       game.play();

    
   } 
   if(gameState===2){
       game.end();
   }
    if(gameState===3){
        game.win();
        textSize(200)
      //  text("hi",windowWidth/2,windowHeight/2)
    }
//console.log(time);
    drawSprites();
   

}


// function spawnVirus(){
//     if(World.frameCount% 60 ===0){
//         for(var i= 450 ; i<100; i=i+450){
//         virus=createSprite(i,400,100,100);
//         // virus.addAnimation(virusImg);
//         }
//     }
// }
