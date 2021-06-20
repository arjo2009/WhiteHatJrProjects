var Xvalue = 0;
var Yvalue = 0;
var filter = 2;
var filterImage = "";
function preload(){
    filterImage = loadImage("https://i.postimg.cc/j2qjyWt5/sunglass.png");
}
function setup(){
    canvas = createCanvas(400, 500);
    canvas.position(480, 350);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function takeSnapshot(){
    save('fliterImage')
}
function modelLoaded(){
    console.log("ml5 poseNet is loaded")
}
function gotPoses(results){
    if(results.length > 0){
       console.log(results);
        console.log("Right Eye X  is = " + results[0].pose.rightEye.x);
        console.log("Right Eye Y  is = " + results[0].pose.rightEye.y);   
        Xvalue = results[0].pose.rightEye.x + -45;
        Yvalue = results[0].pose.rightEye.y + -60;      
    }
}
function draw(){
    image(video, 0, 0, 500, 500);
    image(filterImage, Xvalue, Yvalue, 150, 150);
}

