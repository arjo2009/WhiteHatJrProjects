canvas1 = document.getElementById("myCanvas1");
canvas2 = document.getElementById("myCanvas2");
ctx1=canvas1.getContext("2d");
ctx2=canvas2.getContext("2d");
//car1 parameters
car1_width=110;
car1_height=150;
car1_x=150;
car1_y=400;
//car2 parameters
car2_width=110;
car2_height=150;
car2_x=150;
car2_y=400;
//images
background_image1="road1.jpg";
background_image2="road2.jpg";
car1_Image = "car1.png";
car2_Image = "car2.png";

function add(){
    background_img1Tag = new Image();
    background_img1Tag.onload = uploadBackground1;
    background_img1Tag.src=background_image1;

    background_img2Tag = new Image();
    background_img2Tag.onload = uploadBackground2;
    background_img2Tag.src=background_image2;

    car1_img1Tag= new Image();
    car1_img1Tag.onload = uploadcar1;
    car1_img1Tag.src = car1_Image;

    car1_img2Tag= new Image();
    car1_img2Tag.onload = uploadcar2;
    car1_img2Tag.src = car2_Image;


}
function uploadBackground1(){
    ctx1.drawImage(background_img1Tag, 0, 0, canvas1.width, canvas1.height);
}
function uploadBackground2(){
    ctx2.drawImage(background_img2Tag, 0, 0, canvas1.width, canvas1.height);
}
function uploadcar1(){
    ctx1.drawImage(car1_img1Tag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx2.drawImage(car1_img2Tag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown1);

function my_keydown1(e){
    keyPressed=e.keyCode;
    if(keyPressed==37){
        console.log("left");
        car2left();        
    }
    if(keyPressed==39){
        console.log("right");
        car2right();        
    }
    if(keyPressed==65){
        console.log("left");
        car1left();        
    }
    if(keyPressed==68){
        console.log("right");
        car1right();        
    }
}


function car1left(){
    if(car1_x >= 0){
        car1_x -= 10;
        uploadBackground1();
        uploadcar1();
    }
}
function car1right(){
    if(car1_x <=300){
        car1_x += 10;
        uploadBackground1();
        uploadcar1();
    }
}
function car2left(){
    if(car2_x >= 0){
        car2_x -= 10;
        uploadBackground2();
        uploadcar2();
    }
}
function car2right(){
    if(car2_x <=300){
        car2_x += 10;
        uploadBackground2();
        uploadcar2();
    }
}