expandSwitch = 0
function expand(){
    if(expandSwitch == 0){
        document.getElementById("heading").style.height = "500px";
        document.getElementById("subHeading").style.opacity = "1";
        expandSwitch = 1
        console.log("hello");
    }   
    else{
        document.getElementById("heading").style.height = "70px";
        document.getElementById("subHeading").style.opacity = "0";
        expandSwitch = 0
    }
    
}
//main code//
status = "";
objects = [];
video = "";
person = "";
function preload(){
}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(435, 180);
    video = createCapture(VIDEO);
    video.size(600, 300);
    video.hide()
}
function draw(){push();
    translate(width,0);
    scale(-1, 1);
    image(video, 0, 0, 500, 400);
    pop();
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status = Object Detected";
            document.getElementById("objectNumber").innerHTML = "Number of objects detected : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        if(objects.length > 0){
            for(i = 1; i < objects.length; i++){
                document.getElementById("personDetected").innerHTML = "Person Detecting"
                person = objects[i].label;
                if(person == "person"){
                    document.getElementById("personDetected").innerHTML = "Person Detected"
                }
            }
        }
        else{
            document.getElementById("personDetected").innerHTML = "Person Not Detected"
        }
    }
    
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
        console.log(results);
        objects = results;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1)
}