var mouseEvent="";
var last_mouseX,last_mouseY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",Down);
function Down(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("wol").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",Stop_draw);
function Stop_draw(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mouseup",Mouseup);
function Mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove",draw);
function draw(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.moveTo(last_mouseX,last_mouseY);
        ctx.lineTo(mouseX,mouseY);
        ctx.stroke();
    }
    last_mouseX=mouseX;
    last_mouseY=mouseY;
}