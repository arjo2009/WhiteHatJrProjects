    song = "";
    leftWristX = 0;
    leftWristY = 0;
    rightWristX = 0;
    rightWristY = 0;
    leftWristYScore = 0;
    rightWristYScore = 0;
    function preload(){
        song = loadSound("Disco Climax.mp3")
    }
    function setup(){
        canvas = createCanvas(700, 600);
        canvas.center();

        video = createCapture(VIDEO);
        video.hide();
    }
    function modelLoaded(){
        console.log("model loaded")
    }

    function draw(){
        image(video, 0, 0, 700, 600);
    }
    function play(){
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
    function stopMusic(){
        song.pause()
    }
    function nextMusic(){
        song = loadSound("Phrase Prant.mp3");
        play();
    }
    function prevMusic(){
        song = loadSound("Disco Climax.mp3");
        play();
    }