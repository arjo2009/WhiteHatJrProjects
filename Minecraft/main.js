//Variables
var canvas = new fabric.Canvas("playarea");
var blockHeight = 30;
var blockWidth = 30;
var playerX = 0;
var playerY = 0;
var player = "";
var block = "";

//functions

  //adding player image

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player=Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player);
    });
}
function blockUpload(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block=Img;
        block.scaleToWidth(blockWidth);
        block.scaleToHeight(blockHeight);
        block.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block);
    });
}
//controls function
window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed=="80"){
        blockHeight = blockHeight + 10;
        blockWidth = blockWidth + 10;
        document.getElementById("current-width").innerHTML = blockWidth;
        document.getElementById("current-height").innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keypressed=="77"){
        blockHeight = blockHeight - 10;
        blockWidth = blockWidth - 10;
        document.getElementById("current-width").innerHTML = blockWidth;
        document.getElementById("current-height").innerHTML = blockHeight;
    }
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    if(keypressed == "87"){
        blockUpload("wall.jpg");
        console.log("w");
    }
    if(keypressed == "71"){
        blockUpload("ground.png");
        console.log("g");
    }
    if(keypressed == "76"){
        blockUpload("light_green.png");
        console.log("l");
    }
    if(keypressed == "84"){
        blockUpload("trunk.jpg");
        console.log("u");
    }
    if(keypressed == "82"){
        blockUpload("roof.jpg");
        console.log("r");
    }
    if(keypressed == "89"){
        blockUpload("yellow_wall.png");
        console.log("y");
    }
    if(keypressed == "68"){
        blockUpload("dark_green.png");
        console.log("d");
    }
    if(keypressed == "85"){
        blockUpload("unique.png");
        console.log("u");
    }
    if(keypressed == "67"){
        blockUpload("cloud.jpg");
        console.log("c");
    }
}
function up(){
    if(playerY >= 0){
        playerY = playerY - blockWidth;
        canvas.remove(player);
        player_update();
    }
}
function down(){
    if(playerY <= 500){
        playerY = playerY + blockWidth;
        canvas.remove(player);
        player_update();
    }
}

function left(){
    if(playerX > 0){
        playerX = playerX - blockWidth;
        canvas.remove(player);
        player_update();
    }
}
function right(){
    if(playerX <= 850){
        playerX = playerX + blockWidth;
        canvas.remove(player);
        player_update();
    }
}

