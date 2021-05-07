function preload(){
}
function setup(){
    canvas = createCanvas(400, 500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1UJtpZ_2m/model.json",modelLoaded);
}
function draw(){
    image(video, 0, 0, 400, 500);
    classifier.classify(video, gotResult)
}
function modelLoaded(){
    console.log("MODEL IS LOADED fool!! hahaha")
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("obj-name").innerHTML = results[0].label;
        document.getElementById("accuracy-name").innerHTML = results[0].confidence.toFixed(3);
    }
}