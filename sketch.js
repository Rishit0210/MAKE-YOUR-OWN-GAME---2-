var bg

function preload(){
   bg=loadImage('Images/BG.jpg')
    
}

function setup(){
    createCanvas(displayWidth,displayHeight)
    player=new Player()
    
}

function draw(){
    image(bg,0, 0, displayWidth, displayHeight)

    if(keyDown('left')){
        player.sprite.x-=10
        player.sprite.y+=0
    }
    if(keyDown('right')){
        player.sprite.x+=10
        player.sprite.y+=0
    }
    if(keyDown('up')){
        player.sprite.x+=0
        player.sprite.y-=10
    }
    if(keyDown('down')){
        player.sprite.x+=0
        player.sprite.y+=10
    }

    camera.position.x=player.x
    camera.position.y=player.y
    
   
    drawSprites()
}   

