var displaysign1body = 0;
var displaysign2body = 0;
var displaysign3body = 0;
var displaysign4body = 0;
function showSign1(){
    if (displaysign1body == 0){
        displaysign1body = 1;
       document.getElementById("sign1-body").style.display ="block";
       document.getElementById("arrow1").style.transform = "rotate(90deg)"
    }else {
        displaysign1body = 0;
        document.getElementById("arrow1").style.transform = "rotate(-90deg)"
        document.getElementById("sign1-body").style.display ="none";
     }
}
function showSign2(){
    if (displaysign2body == 0){
        displaysign2body = 1;
       document.getElementById("sign2-body").style.display ="block";
       document.getElementById("arrow2").style.transform = "rotate(90deg)"
    }else {
        displaysign2body = 0;
        document.getElementById("arrow2").style.transform = "rotate(-90deg)"
        document.getElementById("sign2-body").style.display ="none";
     }
}
function showSign3(){
    if (displaysign3body == 0){
        displaysign3body = 1;
       document.getElementById("sign3-body").style.display ="block";
       document.getElementById("arrow3").style.transform = "rotate(90deg)"
    }else {
        displaysign3body = 0;
        document.getElementById("arrow3").style.transform = "rotate(-90deg)"
        document.getElementById("sign3-body").style.display ="none";
     }
}