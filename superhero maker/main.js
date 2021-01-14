//Variables
var canvas = new fabric.Canvas("playarea");
var blockHeight = 30;
var blockWidth = 30;
var playerX = 0;
var playerY =   0;
var player = "";
var block = "";

//functions

  //adding player image

function player_update(){
    fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing", function(Img){
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
