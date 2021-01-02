canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",draw_circle_and_rect);
function draw_circle_and_rect(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("circle_radius").value;
    mouseX= e.clientX-canvas.offsetLeft;
    mouseY= e.clientY- canvas.offsetTop;
    circle_and_rect(mouseX, mouseY);
}
function circle_and_rect(   ){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;                                  
    ctx.arc(mouseX,mouseY,radius,0,2*Math.PI);
    ctx.stroke();
}