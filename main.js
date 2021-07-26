avatar = "";
display = 0
function show(){
    if(display == 0){
        document.getElementById("openImg").style.transform = "rotate(180deg)";
        document.getElementById("options").style.display = "block";        
        display = display + 1;
    }else{
        document.getElementById("openImg").style.transform = "rotate(0deg)";
        document.getElementById("options").style.display = "none";        
        display = display - 1;
    }    
}
function select1(){
    avatar = "Images/boy.png";
    document.getElementById("avatar").src = "Images/boy.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon1").style.border = "2px solid white";
}
function select2(){
    avatar = "Images/boy 2.png";
    document.getElementById("avatar").src = "Images/boy 2.png";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon2").style.border = "2px solid white";
}
function select3(){
    avatar = "Images/girl.png";
    document.getElementById("avatar").src = "Images/girl.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon3").style.border = "2px solid white";
}
function select4(){
    avatar = "Images/girl 2.png";
    document.getElementById("avatar").src = "Images/girl 2.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon4").style.border = "2px solid white";
}
function select5(){
    avatar = "Images/man.png";
    document.getElementById("avatar").src = "Images/man.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon5").style.border = "2px solid white";
}
function select6(){
    avatar = "Images/man1.png";
    document.getElementById("avatar").src = "Images/man1.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon6").style.border = "2px solid white";
}
function select7(){
    avatar = "Images/woman.png";
    document.getElementById("avatar").src = "Images/woman.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon8").style.border = "none";
    document.getElementById("avt-icon7").style.border = "2px solid white";
}
function select8(){
    avatar = "Images/woman 1.png";
    document.getElementById("avatar").src = "Images/woman 1.png";
    document.getElementById("avt-icon2").style.border = "none";
    document.getElementById("avt-icon3").style.border = "none";
    document.getElementById("avt-icon4").style.border = "none";
    document.getElementById("avt-icon5").style.border = "none";
    document.getElementById("avt-icon6").style.border = "none";
    document.getElementById("avt-icon7").style.border = "none";
    document.getElementById("avt-icon1").style.border = "none";
    document.getElementById("avt-icon8").style.border = "2px solid white";
}
function refreshdes(){
    document.getElementById("description").innerHTML = "ABC XYZ";
}
function refreshdes2(){
    document.getElementById("description2").innerHTML = "ABC XYZ";
}
function save(){
    alert("Your Profile Has Been Saved!😎");
    localStorage.setItem("avatar", avatar)
}