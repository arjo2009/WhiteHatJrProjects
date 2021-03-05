Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:0
});
camera = document.getElementById("webcam");
Webcam.attach("#camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImg" src="' + data_uri + '">';
    });
}
console.log("Ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1UJtpZ_2m/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!")
}
function check(){
    img = document.getElementById("selfieImg");
    classifier.classify(img, getResult);
}
function getResult(error, result){
    if(error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("resultName").innerHTML = result[0].label;
        document.getElementById("resultAccuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}