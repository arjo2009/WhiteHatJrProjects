function preload(){
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
}
function draw(){
    image(video, 100, 100, 200, 200);
    //circle1
    stroke(255, 0, 0);
    fill(255, 0, 0);  
    circle(40, 40, 50,);
    //rec1
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(65, 30, 270, 20);
    //cir 2
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(350, 40, 50);
    //rec 2
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(340, 65, 20, 270);
    //cir3
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(350, 350, 50);
    //rec3
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(65, 340, 260, 20);
    //cir4
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(40, 350, 50);
    //rec4
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(30, 65, 20, 260);
}
function takeSnapshot(){
    save('fliterImage')
}