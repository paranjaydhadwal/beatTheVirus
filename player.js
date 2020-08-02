class Player{
    constructor(){
        this.sprite=createSprite(10,550,50,50);
        this.sprite.velocityX=7;
        this.sprite.addAnimation("running",running);
        this.sprite.scale=0.4;
        this.sprite.addAnimation("collided",collided);

    }
     gravity(gValue){
        this.sprite.velocityY=this.sprite.velocityY+gValue;
     }
     control(){
        if  (keyIsDown(32)&&player.sprite.y>520){
            player.sprite.velocityY=-15;
            jump.play();
        }
     }
   //  
}