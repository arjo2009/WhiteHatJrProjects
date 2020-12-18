var names=["","Angshuman Mukherjee",
"Juveri Chakraborty",
"Antariksh Mukerjee",
"Dipa and Anup Mukerjee",
"Shipra and Kamal Kishore Chakraborty",];
var members=["","Dad",
"Mom",
"Brother",
"Paternal Grandparents",
"Maternal Grandparents"];
var memberimage=["my family.png",
"dad.jpg",
"mom.jpg",
"brother.jpg",
"paternal grandparents.png",
"maternal grandparents.png"];
var imgno=0;
function next(){
    if (imgno==5){
    imgno=0;
    document.getElementById("display_img").src=memberimage[imgno];
    document.getElementById("member_display").innerHTML=members[imgno];
    document.getElementById("name_display").innerHTML=names[imgno];
    
    }
    else{
    imgno=imgno+1;
    var currentmember=members[imgno];
    var currentname=names[imgno];
    document.getElementById("member_display").innerHTML=members[imgno];
    document.getElementById("name_display").innerHTML=names[imgno];
    document.getElementById("display_img").src=memberimage[imgno];
    
    }    
}
function prev(){
    if (imgno==0){
    imgno=5;
    document.getElementById("display_img").src=memberimage[imgno];
    document.getElementById("member_display").innerHTML=members[imgno];
    document.getElementById("name_display").innerHTML=names[imgno];
    
    }
    else{
    imgno=imgno-1;
    document.getElementById("member_display").innerHTML=members[imgno];
    document.getElementById("name_display").innerHTML=names[imgno];
    document.getElementById("display_img").src=memberimage[imgno];
    
    }    
}
function home(){
    imgno=0;
    document.getElementById("member_display").innerHTML=members[imgno];
    document.getElementById("name_display").innerHTML=names[imgno];
    document.getElementById("display_img").src=memberimage[imgno];
}