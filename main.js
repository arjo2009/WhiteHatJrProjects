classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}

function identify(){
    img1 = document.getElementById("testImg1");
    img2 = document.getElementById("testImg2");
    img3 = document.getElementById("testImg3");
    img4 = document.getElementById("testImg4");
    img5 = document.getElementById("testImg5");
    classifier.classify(img1, gotResultmn1);
    classifier.classify(img2, gotResultmn2);
    classifier.classify(img3, gotResultmn3);
    classifier.classify(img4, gotResultmn4);
    classifier.classify(img5, gotResultmn5);
}


function gotResultmn1(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("mnResult1").innerHTML = results[0].label
    }
}
function gotResultmn2(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("mnResult2").innerHTML = results[0].label
    }
}
function gotResultmn3(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("mnResult3").innerHTML = results[0].label
    }
}
function gotResultmn4(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("mnResult4").innerHTML = results[0].label
    }
}
function gotResultmn5(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("mnResult5").innerHTML = results[0].label
    }
}