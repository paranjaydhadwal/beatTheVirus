class Game{
    constructor(){
        this.x = windowWidth;
        this.virusGroup=new Group();
        this.house=createSprite(9500,windowHeight/1.35,20,20);
        this.house.addImage(houseImg);
        this.house.scale=0.19;
        this.gameOver=createSprite(50,200,50,50);
      //  this.gameOver.addImage(gameOverImg);
        this.gameOver.visible=false;
        this.restart=createSprite(50,200,50,50);
        this.restart.addImage(restartImg);
        this.restart.visible=false;
        this.gameOver.scale=0.6;
        this.restart.scale=0.6;
        this.maskGroup=new Group();
        this.x1=300;
        this.flag=0;
        // this.winSprite=createSprite(50,200,50,50);
        // this.winSprite.addImage(winImg);
        // this.winSprite.visible=false;
    }
    start(){
        textSize(20);
        fill("white");
        text("Save the person from various viruses present",windowWidth/2-100,windowHeight/2-300)
         text("In this unprecident times of COVID 19 .There is a need for all of us to overcome the virus ",windowWidth/2-500+200,windowHeight/2-260);
         text("STAY SAFE STAY HOME",windowWidth/2-100,windowHeight/2-220);
         text("The rules of this game are simple:",windowWidth/2-300+75+50,windowHeight/2-180)
         text("1) You will have to make the person reach home safely ",windowWidth/2-300+75+50,windowHeight/2-140);
         text("2) Press Spacebar to start and jump",windowWidth/2-300+75+50,windowHeight/2-100);
         text("3) There shall be sanitizers and mask in the game ",windowWidth/2-300+75+50,windowHeight/2-60);
         text(" And you shall have to go through them to get 5 second immunity from the virus",windowWidth/2-300+75+50,windowHeight/2-20);
         player.sprite.visible=false;
         if(keyIsDown(32)){
             gameState=1;
            // jump.play();
         }
         player.sprite.velocityX=0;  
    }
    play(){
        player.gravity(0.65);
        camera.position.x=player.sprite.x+600;
      //  player.sprite.y=500;
        player.sprite.visible=true;
        player.sprite.velocityX=7;
        player.sprite.collide(invisibleGround);
        player.sprite.changeAnimation(running);
        textSize(30);
        fill('white');
        text("Beat the Virus.. Save The community",camera.position.x-150,camera.position.y-250);
        this.spawnVirus();
        if(player.sprite.isTouching(this.virusGroup)&&this.flag===0){
          gameState=2;
        }
        player.control();
   //     text(player.sprite.x,camera.position.x+200,200);
        if(player.sprite.isTouching(this.house)){
            gameState=3;
          
        }
       // this.timer();
        this.spawnMask();
      
        if(player.sprite.isTouching(this.maskGroup)){
            this.maskGroup.destroyEach();
            this.flag=1;
            time=5;

           
        }

        if(this.flag===1){
            this.timer();
            textSize(150);
           // textColour("white")
           fill("white")
            text(time,camera.position.x+200+300,windowHeight/2-windowHeight/4);
        }
        if(time<=0){
        this.flag=0;
        }
    }
    end(){
     //  text("game Over",camera.position.x,camera.position.y);
        player.sprite.velocityX=0;
        player.sprite.velocityY=0;
     //   this.gameOver.visible=true;
       // this.gameOver.x=camera.position.x;
       // this.gameOver.y=camera.position.y-50;
        this.restart.visible=true;
        this.restart.y=camera.position.y+50;
        this.restart.x=camera.position.x;
        player.sprite.changeAnimation("collided",collided);
        if(mousePressedOver(this.restart)){
            gameState=0;
            this.restart.visible=false;
           // this.gameOver.visible=false;
            this.virusGroup.destroyEach();
            this.maskGroup.destroyEach();
            player.sprite.position.x=10;
            player.sprite.position.y=550;
            player.sprite.changeAnimation("running",running);
           
        }
       

       // this.gameOver.depth=player.sprite.depth+1;
    }
    win(){
        textSize(30);
        fill("white");
        text("Congratulations!!!!!",camera.position.x-300,camera.position.y);
        text("You have safely reached the home ",camera.position.x-300,camera.position.y+40);
        text("STAY HOME AND STAY SAFE ",camera.position.x-300,camera.position.y+80)
  //      text("")
        //image(winImg,camera.position.x,camera.position.y);
     //   this.winSprite.visible=true;
     player.sprite.changeAnimation("collided",collided);
        player.sprite.velocityX=0;
        player.sprite.velocityY=0;
    }
    spawnVirus(){
        if(frameCount % 30 === 0 && this.x<9000) {
            this.x=this.x+600
            var virus = createSprite(this.x,windowHeight-105,10,40);
           var rand=(Math.round(random(1,4)));
           switch(rand){
               case 1 :virus.addImage(virusImg1);
               virus.scale=0.5;
               break;
               case 2:virus.addImage(virusImg2);
               virus.scale=0.4
               break;
               case 3: virus.addImage(virusImg3);
               virus.scale=0.5
               break;
               case 4: virus.addImage(virusImg4);
               virus.scale=0.4
               break;
               default: break;
           }
           // virus.addImage(virusImg1);
       
            this.virusGroup.add(virus);
        }
   

        }
        
        spawnMask(){
            if(frameCount%80===0&&this.x1<9500){
                this.x1=this.x1+1600
    
                var mask = createSprite(this.x1,windowHeight+155,10,40);
                mask.y=random(windowHeight/2,windowHeight-100);
                var rand=(Math.round(random(1,2)));
                switch(rand){
               case 1 :mask.addImage(mask1);
               mask.scale=0.07
              break;
               case 2:mask.addImage(santizer);
            
                mask.scale=0.15
               break;
               case 3:mask.addImage(veg);
               mask.scale=0.15
               break;
               default: break;
           }
           this.maskGroup.add(mask);
           
            }
        }
    timer(){
        if(frameCount%60===0&&time>0){
          
            time--
           
        }
      
        
    }
  
}