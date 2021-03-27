Webcam.set({
    height:340,
    width:340,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="selfie" src="'+data_uri+'">'
    })
}
console.log("ml5 version: ", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q-r4x_i2P/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}

function identify(){
    img = document.getElementById("selfie");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results)
        document.getElementById("rating").innerHTML = results[0].label;
        result = document.getElementById("rating").innerHTML;
        showResult()
    }
}
function showResult(){
    if(result == "THUMBS UP"){
        document.getElementById("emoji-img").src = "thumbs up gif.gif";
    }else if(result == "THUMBS DOWN"){
        document.getElementById("emoji-img").src = "thumbs down.gif";
    }else{
        document.getElementById("emoji-img").src = "victory.gif"
    }
}