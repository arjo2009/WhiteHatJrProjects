img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("tv and ac.jpg");
}
function setup(){
    canvas = createCanvas(550, 380);
    canvas.position(420, 300);
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function modelLoaded(){
    console.log("ITS WORKING CLOSE CONSOLE!!!!!!!!!!!!!!!!!!!!!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(img, 0, 0, 550, 380);
    if(status != ""){       
        objectDetector.detect(img, gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("objects").innerHTML = "Number of objects : " + objects.length;
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    } 
}