//Variables
var canvas = new fabric.Canvas("playarea");
var blockHeight = 150;
var blockWidth = 150;
var playerX = 0;
var playerY =   0;
var player = "";
var block = "";

//functions

  //adding player image

function player_update(){
    fabric.Image.fromURL("player.jpg", function(Img){
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
    //up down left right
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
    //others
    //captain
    if(keypressed == "87"){
        blockUpload("cap head.png");
        console.log("w");
    }
    if(keypressed == "65"){
        blockUpload("cap hand left.png");
        console.log("a");
    }
    if(keypressed == "83"){
        blockUpload("cap body.png");
        console.log("s");
    }
    if(keypressed == "68"){
        blockUpload("cap hand right.png");
        console.log("d");
    }
    if(keypressed == "90"){
        blockUpload("cap leg left.png");
        console.log("z");
    }
    if(keypressed == "88"){
        blockUpload("cap leg right.png");
        console.log("x");
    }
    //iron man
    if(keypressed == "69"){
        blockUpload("tony head.png");
        console.log("e");
    }
    if(keypressed == "82"){
        blockUpload("tony hand left.png");
        console.log("r");
    }
    if(keypressed == "84"){
        blockUpload("tony body.png");
        console.log("t");
    }
    if(keypressed == "89"){
        blockUpload("tony hand right.png");
        console.log("y");
    }
    if(keypressed == "85"){
        blockUpload("tony leg left.png");
        console.log("u");
    }
    if(keypressed == "73"){
        blockUpload("tony leg leg right.png");
        console.log("i");
    }
    //hulk
    if(keypressed == "70"){
        blockUpload("hulk head.jfif");
        console.log("f");
    }
    if(keypressed == "71"){
        blockUpload("hulk hand left.jfif");
        console.log("g");
    }
    if(keypressed == "72"){
        blockUpload("hulk body.jfif");
        console.log("h");
    }
    if(keypressed == "74"){
        blockUpload("hulk hand right.jfif");
        console.log("j");
    }
    if(keypressed == "75"){
        blockUpload("hulk leg left.jfif");
        console.log("k");
    }
    if(keypressed == "76"){
        blockUpload("hulk leg right.jfif");
        console.log("l");
    }
    //spidey
    if(keypressed == "81"){
        blockUpload("spidey head.png");
        console.log("q");
    }
    if(keypressed == "67"){
        blockUpload("spidey hand left.png");
        console.log("c");
    }
    if(keypressed == "86"){
        blockUpload("spidey body.png");
        console.log("v");
    }
    if(keypressed == "66"){
        blockUpload("spidey hand right.png");
        console.log("b");
    }
    if(keypressed == "78"){
        blockUpload("spidey leg left.png");
        console.log("n");
    }
    if(keypressed == "77"){
        blockUpload("spidey leg right.png");
        console.log("m");
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
