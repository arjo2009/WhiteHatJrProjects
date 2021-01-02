canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",define);
function define(e){
    mouseX= e.clientX-canvas.offsetLeft;
    mouseY= e.clientY- canvas.offsetTop;
    draw(mouseX, mouseY);
}
function draw(mouseX, mouseY){
    //black
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=15;                                  
    ctx.arc(mouseX,mouseY,80,0,2*Math.PI);
    ctx.stroke();
    //red
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=15;                                  
    ctx.arc(mouseX+190,mouseY,80,0,2*Math.PI);
    ctx.stroke();
    //blue
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=15;                                  
    ctx.arc(mouseX-190,mouseY,80,0,2*Math.PI);
    ctx.stroke();
    //yellow
    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=15;                                  
    ctx.arc(mouseX-90,mouseY+90,80,0,2*Math.PI);
    ctx.stroke();
    //green
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=15;                                  
    ctx.arc(mouseX+90,mouseY+90,80,0,2*Math.PI);
    ctx.stroke();
}
function Screenclear(){
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.stroke();
}